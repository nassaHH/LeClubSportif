import { faker } from '@faker-js/faker/locale/fr';
import { PrismaClient, utilisateur_Civilite, utilisateur_Role} from '@prisma/client';


const data = Array.from({ length: 10 }).map(() => ({
    Prenom:             faker.name.firstName(),
    Nom:                faker.name.lastName(), 
    Role:               faker.helpers.arrayElement(Object.values(utilisateur_Role)),
    Civilite:           faker.helpers.arrayElement(Object.values(utilisateur_Civilite)),
    Email:              faker.internet.email(),
    MDP:                faker.internet.password(),             
    DateDeNaissance:    faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),          
    Adresse:            faker.address.streetAddress(), 
    Telephone:          faker.phone.number(),
    CodePostal:         faker.datatype.number({ max: 99999 }),   
    Ville:              faker.address.cityName(),              
    Pays:               faker.address.country(), 
    ProgrammeEntrainement:faker.datatype.number({ max: 1 }),                 
    Emailing:           faker.datatype.number({ max: 1 }),                   
    CGV:                faker.datatype.number({ max: 1 }),                    
    Club:               faker.helpers.fake('Club de {{ address.cityName() }}' ),
}))


const prisma = new PrismaClient();

async function main() {
    await prisma.utilisateur.createMany({
        data
    });    
}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    }
)
