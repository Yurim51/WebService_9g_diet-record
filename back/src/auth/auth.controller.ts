import { Body, Controller, Get, Param, Post, Req, Res, UseFilters, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/google.guard';
import { AuthService } from './auth.service';
import { LocalSignupDto } from './dto/localSignupDto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './utils/local.guard';
import { isLoggedInGuard } from './utils/isLoggedin.guard';
import { RedirectFilter } from './utils/redirectFilter';
import { LocalLoginDto } from './dto/localLoginDto';

@UseFilters(new RedirectFilter())
@ApiTags('api/auth')
@Controller('api/auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    
    /* 구글 로그인 요청 */
    @ApiOperation({ summary: '구글 로그인 요청 API' })
    @ApiResponse({ status: 301, description: '구글 로그인 창으로 이동'})
    @Get('google/login')
    @UseGuards(GoogleAuthGuard)
    handleGoogleLogin() {}

    /* 구글 로그인 후 홈 화면으로 리이렉트 */
    @ApiOperation({ summary: '구글서버에서 사용자인증 후 accessToken을 보내는 주소'})
    @ApiResponse({ status: 200, description: '구글 로그인 성공. 쿠키저장소에 sessionID가 등록됩니다.'})
    @ApiResponse({ status: 409, description: '이미 로컬계정으로 등록된 이메일입니다.'})
    @Get('google/redirect')
    @UseGuards(GoogleAuthGuard) // 여기서 req.user에 user 정보가 담김
    handleGoogleRedirect(@Req() request:any ,@Res() response:any) {
        console.log('구글로그인 진행중...')
        response.status(200).send('구글 로그인 성공, 백엔드에 요청시 메인페이지로 리다이렉팅해드립니다.');
    }


    /* 로컬 회원가입 */
    @ApiOperation({ summary: '로컬 회원가입 요청 API' })
    @ApiBody({ type: LocalSignupDto, description: '회원가입 정보'})
    @ApiResponse({ status: 200, description: '로컬 회원가입 성공.'})
    @ApiResponse({ status: 409, description: '이미 구글계정으로 등록된 이메일입니다. / 이미 로컬계정으로 등록된 이메일입니다.'})
    @Post('local/signup')
    async handleLocalSignup(@Body() localSignupDto: LocalSignupDto, @Res() response: any) {
        console.log('회원가입진행중...', localSignupDto);
        await this.authService.localSignup(localSignupDto);
        response.status(200).send('로컬 회원가입 성공, 백엔드에 요청시 로그인페이지로 리다이렉팅해드립니다.');
    }

    /* 로컬 로그인 */
    @ApiOperation({ summary: '로컬 로그인 요청 API' })
    @ApiBody({ type: LocalLoginDto, description: '로그인 정보'})
    @ApiResponse({ status: 200, description: '로컬 로그인 성공. 쿠키저장소에 sessionID가 등록됩니다.'})
    @ApiResponse({ status: 401, description: '등록되지 않은 이메일입니다. / 비밀번호가 일치하지 않습니다.'},{overrideExisting: false})
    @Post('local/login')
    @UseGuards(LocalAuthGuard)
    async handleLocalLogin(
        @Req() request: any, @Res() response: any){
        console.log('로그인 진행중...', request.user);
        response.status(200).send('로컬 로그인 성공, 백엔드에 요청시 메인페이지로 리다이렉팅해드립니다.');
    }
    

    /* 구글 로그아웃, 로컬 로그아웃 공용 API */
    @ApiOperation({ summary: '로그아웃 uri' })
    @ApiResponse({ status: 200, description: '로그아웃 성공. 쿠키저장소에 sessionID가 삭제됩니다.'})
    @ApiResponse({ status: 401, description: '로그인이 필요합니다.'})
    @UseGuards(isLoggedInGuard)
    @Get('logout')
    async handleGoogleLogout(@Req() request: any, @Res() response: any): Promise<void> {

        try{
            const sessionId = request.signedCookies[process.env.SESSION_COOKIE_NAME];
            // console.log('로그아웃 후의 세션저장소 :', request.sessionStore,'\n로그아웃 힐 세션아이디: ', sessionId );
            await request.sessionStore.destroy(sessionId, (err)=>err && {msg: 'logout fail', err: err});
            request.user = null;
            await response.clearCookie(process.env.SESSION_COOKIE_NAME, {signed: true});
            response.status(200).send('로그아웃 성공, 백엔드에 요청시 로그인 페이지로 리다이렉팅해드립니다.');
            console.log(`${sessionId}가 로그아웃 되었습니다.`)

        }catch(err){ throw err; }
        // finally{ console.log('로그아웃 후의 세션저장소: ', request.sessionStore); }
    }


    /* 회원 탈퇴 API */
    @ApiOperation({ summary: '회원 탈퇴 API' })
    @ApiResponse({ status: 200, description: '회원 탈퇴 성공. 쿠키저장소에 sessionID가 삭제됩니다. 유저건강정보도 삭제됩니다.'})
    @ApiResponse({ status: 401, description: '로그인이 필요합니다.'})
    @UseGuards(isLoggedInGuard)
    @Get('withdrawal')
    async handleWithdrawal(@Req() request: any, @Res() response: any): Promise<void> {
        try{
            // 회원 탈퇴
            const result = await this.authService.withdrawal(request.user.userId);
            console.log(result);

            // 세션, req.user, cookie 삭제
            const sessionId = request.signedCookies[process.env.SESSION_COOKIE_NAME];
            await request.sessionStore.destroy(sessionId, (err)=>err && {msg: 'logout fail', err: err});
            request.user = null;
            await response.clearCookie(process.env.SESSION_COOKIE_NAME, {signed: true});
            await response.status(200).send('회월탈퇴 성공, 백엔드에 요청시 로그인 페이지로 리다이렉팅해드립니다.');
        }catch(err){ console.log(err); throw err; }
    }
}
