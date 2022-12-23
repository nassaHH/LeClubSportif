import prisma from "../../prisma/utils/prisma";

export default async function handler(req, res) {
    const { Role, Email, MDP, Civilite, Nom, Prenom, DateDeNaissance, Telephone, Adresse, CodePostal, Ville, Pays, Club, Emailing, ProgrammeEntrainement, CGV } = req.body

    try {
        const results = await prisma.utilisateur.create({
            data: {
                Role,
                Email,
                MDP,
                Civilite, 
                Nom,
                Prenom,
                DateDeNaissance,
                Telephone,
                Adresse,
                CodePostal,
                Ville,
                Pays,
                Club,
                Emailing,
                ProgrammeEntrainement,
                CGV
            }
        });

        return res.status(200).json(results, { message: 'Un utilisateur a été crée' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

