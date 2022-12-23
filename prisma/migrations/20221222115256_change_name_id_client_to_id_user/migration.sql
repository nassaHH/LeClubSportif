/*
  Warnings:

  - The primary key for the `utilisateur` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `IDClient` on the `utilisateur` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[IDUser]` on the table `utilisateur` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `IDUser` to the `utilisateur` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `ID_UNIQUE` ON `utilisateur`;

-- AlterTable
ALTER TABLE `utilisateur` DROP PRIMARY KEY,
    DROP COLUMN `IDClient`,
    ADD COLUMN `IDUser` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `Role` ENUM('Inscrit', 'Adhérent', 'Coach', 'Admin') NOT NULL,
    ADD PRIMARY KEY (`IDUser`);

-- CreateIndex
CREATE UNIQUE INDEX `ID_UNIQUE` ON `utilisateur`(`IDUser`);
