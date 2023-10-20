import "reflect-metadata"
import { DataSource } from "typeorm"
import { Film1697790008429 } from "./migration/1697790008429-user"
import { User } from "./models/User"


export const AppDataSource = new DataSource({
 type: "mysql",
 host: "localhost",
 port: 3306,
 username: "root",
 password: "1324",
 database: "fsd-typeorm",
 entities: [User],
 migrations: [Film1697790008429],
 synchronize: false,
 logging: false,
})