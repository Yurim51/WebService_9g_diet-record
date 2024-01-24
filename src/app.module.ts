import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './conifg/database/typorm.config.mj';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from './user/user.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    PassportModule.register({ session: true }),
    AuthModule,
    UserModule,
    ImageModule,
  ],
})
export class AppModule {}