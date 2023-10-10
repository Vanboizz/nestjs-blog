import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmailColumnToUserTable1696906525454 implements MigrationInterface {
    name = 'AddEmailColumnToUserTable1696906525454'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    }

}
