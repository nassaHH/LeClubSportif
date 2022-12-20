/*
  Warnings:

  - You are about to alter the column `Civilite` on the `utilisateur` table. The data in that column could be lost. The data in that column will be cast from `VarChar(10)` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `utilisateur` MODIFY `Civilite` ENUM('Madame', 'Monsieur') NOT NULL;
