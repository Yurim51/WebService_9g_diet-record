import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './conifg/database/typorm.config.mj';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from './user/user.module';
import { ImageModule } from './image/image.module';
import * as dotenv from "dotenv";
import * as config from "config";

dotenv.config({path: __dirname + '/../.env'});
const dbConfig = config.get("db");
console.log(typeORMConfig)
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