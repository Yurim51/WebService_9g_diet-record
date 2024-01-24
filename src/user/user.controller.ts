
import { response, Request } from 'express';
import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiResponseProperty, ApiTags } from '@nestjs/swagger';
import { isLoggedInGuard } from 'src/auth/utils/isLoggedin.guard';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { CreateUserDto } from './dto/CreateUser.dto';

@ApiTags('api/user')
@Controller('api/user')
export class UserController {
    constructor(private userService: UserService){}

    @ApiOperation({summary: '유저정보 가져오기'})
    @Get()
    @UseGuards(isLoggedInGuard)
    public async handleGetUserInfo(@Req() request: any, @Res() response: any){
        const result = 'temp'
        response.status(200).json(result);
    }

    @ApiOperation( {summary: '유저정보 수정하기'} )
    @Put()
    @UseGuards(isLoggedInGuard)
    public async updateUserInfo(
        @Req() request: any, 
        @Body() updateUserDto: UpdateUserDto, 
        @Res() response: any){ 
                console.log('사용자 정보 업데이트 시작...')
                const result = await this.userService.updateUserByUserId(request.user.userId, updateUserDto);
                response.status(204).send(result);      
    }

}
