import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Users1697790008429 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "userName",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "gametag",
                        type: "varchar",
                        length: "255",
                    }
                    
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       
        await queryRunner.dropTable("users");
    }

}
