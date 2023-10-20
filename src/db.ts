import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
 type: "mysql",
 host: "localhost",
 port: 3306,
 username: "root",
 password: "1324",
 database: "fsd-typeorm",
 entities: [],
 synchronize: false,
 logging: false,
})