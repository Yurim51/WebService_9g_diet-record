import { Module } from '@nestjs/common';
import * as config from "config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './conifg/database/typorm.config.mj';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from './user/user.module';
import { createConnection } from 'typeorm';
import * as dotenv from "dotenv";

// dotenv.config({path: __dirname + '/../.env'});
// const dbConfig = config.get("db");
@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    PassportModule.register({ session: true }),
    AuthModule,
    UserModule,
  ],
})
export class AppModule {
  //   constructor() {
  //     createConnection({
  //     type: dbConfig.type,
  //     host: process.env.RDS_HOSTNAME || dbConfig.host,
  //     port: process.env.RDS_PORT || dbConfig.post,
  //     username: process.env.RDS_USERNAME || dbConfig.username,
  //     password: process.env.RDS_PASSWORD || dbConfig.password,
  //     database: process.env.RDS_DB_NAME || dbConfig.database,
  //     entities: [__dirname + "/../../**/*.entity.{js, ts}"],
  //     synchronize: false,
  //   })
  //     .then((connection) => {
  //       console.log('연결 되었나!', connection.entityMetadatas.length);
  //       console.log(process.env.RDS_HOSTNAME)
  //       console.log(process.env.RDS_PORT)
  //       console.log(process.env.RDS_USERNAME)
  //       console.log(process.env.GOOGLE_CLIENT_ID)
  //       console.log(process.env.GOOGLE_CLIENT_PW)
  //     })
  //     .catch((error) => console.log(error));
  // }
}