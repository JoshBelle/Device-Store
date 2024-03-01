/*
  Warnings:

  - Changed the type of `price` on the `Device` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
CREATE SEQUENCE bascketdevice_basketid_seq;
ALTER TABLE "BascketDevice" ALTER COLUMN "basketId" SET DEFAULT nextval('bascketdevice_basketid_seq');
ALTER SEQUENCE bascketdevice_basketid_seq OWNED BY "BascketDevice"."basketId";

-- AlterTable
ALTER TABLE "Device" DROP COLUMN "price",
ADD COLUMN     "price" INTEGER NOT NULL;
