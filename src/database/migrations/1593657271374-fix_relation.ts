import {MigrationInterface, QueryRunner} from "typeorm";

export class fixRelation1593657271374 implements MigrationInterface {
    name = 'fixRelation1593657271374'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_ff503f858b61860b2b7d7a55ce" ON "roles" ("type") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_ff503f858b61860b2b7d7a55ce"`);
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "type"`);
    }

}
