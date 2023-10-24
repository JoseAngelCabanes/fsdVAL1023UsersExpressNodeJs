import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./models/User"
import { Users1697790008429 } from "./migration/1697790008429-user"
import { CreateOccupationTable1698047217959 } from "./migration/1698047217959-create-occupation-table"
import { CreateUsersOccupationTable1698048098926 } from "./migration/1698048098926-create-users_occupation-table"


export const AppDataSource = new DataSource({
 type: "mysql",
 host: "localhost",
 port: 3306,
 username: "root",
 password: "1324",
 database: "fsd-typeorm",
 entities: [User],
 migrations: [Users1697790008429, CreateOccupationTable1698047217959, CreateUsersOccupationTable1698048098926],
 synchronize: false,
 logging: false,
})