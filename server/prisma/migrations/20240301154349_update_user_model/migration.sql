-- DropIndex
DROP INDEX "User_bascketId_key";

-- AlterTable
CREATE SEQUENCE user_bascketid_seq;
ALTER TABLE "User" ALTER COLUMN "bascketId" SET DEFAULT nextval('user_bascketid_seq');
ALTER SEQUENCE user_bascketid_seq OWNED BY "User"."bascketId";
