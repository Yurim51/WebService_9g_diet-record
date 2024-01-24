import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as config from "config";
import { HealthInfo } from "src/user/entities/health-info.entity";
import { User } from "src/user/entities/user.entity";
import * as TypeOrmNamingStrategies from "typeorm-naming-strategies";
import * as dotenv from "dotenv";
import { SplitImage } from "src/image/entities/splitImage.entity";
import { Image } from "src/image/entities/image.entity";

// dotenv.config();
const dbConfig = config.get("db");

export const typeORMConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.DB_HOSTNAME ,
  port: Number(process.env.DB_PORT) || dbConfig.post,
  username: process.env.DB_USERNAME || dbConfig.username,
  password: process.env.DB_PASSWORD || dbConfig.password,
  database: process.env.DB_NAME || dbConfig.database,
  entities: [ User, HealthInfo, Image, SplitImage ],
  synchronize: true,
  namingStrategy: new TypeOrmNamingStrategies.SnakeNamingStrategy(),
  logging: true,
  // ssl: {
  //   rejectUnauthorized: false
  // }
};
