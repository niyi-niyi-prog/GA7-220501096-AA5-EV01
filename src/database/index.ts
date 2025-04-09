import 'reflect-metadata'
import { DataSource } from 'typeorm'

import * as dotenv from 'dotenv';
import { User } from '../models/user.entity';

dotenv.config()


//configuracion de la base de datos e importacion de los modulos usados
export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as 'mysql',
  host: 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
})
