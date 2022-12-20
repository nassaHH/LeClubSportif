-- CreateTable
CREATE TABLE `club` (
    `IDClub` INTEGER NOT NULL AUTO_INCREMENT,
    `Nom` VARCHAR(100) NOT NULL,
    `Email` VARCHAR(100) NOT NULL,
    `Adresse` VARCHAR(100) NOT NULL,
    `Telephone` VARCHAR(20) NOT NULL,
    `CodePostal` INTEGER NOT NULL,
    `Ville` VARCHAR(50) NOT NULL,
    `Pays` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `ID_UNIQUE`(`IDClub`),
    PRIMARY KEY (`IDClub`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contrat` (
    `idContrat` INTEGER NOT NULL AUTO_INCREMENT,
    `RemplisDeposeRIB` TINYINT NOT NULL,
    `RIB` TINYINT NOT NULL,
    `BeneficiaireNonPayeur` TINYINT NOT NULL,
    `Beneficiaire` VARCHAR(45) NOT NULL,
    `Banque` VARCHAR(100) NOT NULL,
    `IBAN` VARCHAR(27) NOT NULL,
    `BIC` VARCHAR(9) NOT NULL,
    `Utilisateur_IDClient` INTEGER NOT NULL,

    UNIQUE INDEX `idContrat_UNIQUE`(`idContrat`),
    INDEX `fk_Contrat_Utilisateur1_idx`(`Utilisateur_IDClient`),
    PRIMARY KEY (`idContrat`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `message` (
    `idMessage` INTEGER NOT NULL AUTO_INCREMENT,
    `Objet` VARCHAR(100) NOT NULL,
    `Message` LONGTEXT NOT NULL,
    `Utilisateur_IDClient` INTEGER NOT NULL,

    UNIQUE INDEX `idMessage_UNIQUE`(`idMessage`),
    INDEX `fk_Message_Utilisateur1_idx`(`Utilisateur_IDClient`),
    PRIMARY KEY (`idMessage`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `planning` (
    `idPlanning` INTEGER NOT NULL AUTO_INCREMENT,
    `NomDuCours` VARCHAR(100) NOT NULL,
    `Date` DATETIME(0) NOT NULL,
    `Club_IDClub` INTEGER NOT NULL,

    UNIQUE INDEX `idPlanning_UNIQUE`(`idPlanning`),
    INDEX `fk_Planning_Club1_idx`(`Club_IDClub`),
    PRIMARY KEY (`idPlanning`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `utilisateur` (
    `IDClient` INTEGER NOT NULL AUTO_INCREMENT,
    `Role` ENUM('Inscrit', 'Adhérent', 'Admin') NOT NULL,
    `Civilite` VARCHAR(10) NOT NULL,
    `Nom` VARCHAR(50) NOT NULL,
    `Prenom` VARCHAR(50) NOT NULL,
    `Email` VARCHAR(100) NOT NULL,
    `MDP` VARCHAR(100) NOT NULL,
    `DateDeNaissance` DATE NOT NULL,
    `Adresse` VARCHAR(100) NOT NULL,
    `Telephone` VARCHAR(20) NOT NULL,
    `CodePostal` INTEGER NOT NULL,
    `Ville` VARCHAR(50) NOT NULL,
    `Pays` VARCHAR(45) NOT NULL,
    `ProgrammeEntrainement` TINYINT NULL,
    `Emailing` TINYINT NOT NULL,
    `CGV` TINYINT NOT NULL,
    `Club` VARCHAR(100) NULL,
    `Planning_idPlanning` INTEGER NULL,
    `Club_IDClub` INTEGER NULL,

    UNIQUE INDEX `ID_UNIQUE`(`IDClient`),
    UNIQUE INDEX `Email_UNIQUE`(`Email`),
    INDEX `fk_Utilisateur_Club1_idx`(`Club_IDClub`),
    INDEX `fk_Utilisateur_Planning1_idx`(`Planning_idPlanning`),
    PRIMARY KEY (`IDClient`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `contrat` ADD CONSTRAINT `fk_Contrat_Utilisateur1` FOREIGN KEY (`Utilisateur_IDClient`) REFERENCES `utilisateur`(`IDClient`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `message` ADD CONSTRAINT `fk_Message_Utilisateur1` FOREIGN KEY (`Utilisateur_IDClient`) REFERENCES `utilisateur`(`IDClient`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `planning` ADD CONSTRAINT `fk_Planning_Club1` FOREIGN KEY (`Club_IDClub`) REFERENCES `club`(`IDClub`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `utilisateur` ADD CONSTRAINT `fk_Utilisateur_Club1` FOREIGN KEY (`Club_IDClub`) REFERENCES `club`(`IDClub`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `utilisateur` ADD CONSTRAINT `fk_Utilisateur_Planning1` FOREIGN KEY (`Planning_idPlanning`) REFERENCES `planning`(`idPlanning`) ON DELETE NO ACTION ON UPDATE NO ACTION;
