-- AlterTable
ALTER TABLE `utilisateur` MODIFY `Role` ENUM('Inscrit', 'Adhérent', 'Coach', 'Admin') NOT NULL DEFAULT 'Inscrit';
