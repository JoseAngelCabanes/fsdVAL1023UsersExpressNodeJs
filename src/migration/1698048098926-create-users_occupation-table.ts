import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsersOccupationTable1698048098926 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users_occupation",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "occupation_id",
                        type: "int"
                    },
                    {
                        name: "users_id",
                        type: "int"
                    }

                ],
                foreignKeys: [
                    {
                        columnNames: ["occupation_id"],
                        referencedTableName: "occupation",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    },
                    {
                        columnNames: ["users_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    }
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("users_occupation");
    }

}
