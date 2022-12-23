import Head from 'next/head';
import styled from 'styled-components';
import prisma from '../../prisma/utils/prisma';
import { LinkPerso } from '../nav';

export const getServerSideProps = async () => {
    const utilisateurs = await prisma.utilisateur.findMany()
    return {
        props: {
            utilisateurs: JSON.parse(JSON.stringify(utilisateurs)),
        },
    }
}

export default function listeUtilisateur({utilisateurs}) {


    return (
        <div>
            <Head>
                <title>Liste des utilisateurs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="text-center">                
                <Title>Liste des utilisateurs</Title>
                <LinkPerso href="/admin/creerUtilisateur" className="btn ">Ajouter</LinkPerso>
            </div>
            <div className="form">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Role</th>
                            <th scope="col">Civilité</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Prénom</th>
                            <th scope="col">Email</th>
                            <th scope="col">Téléphone</th>
                            <th scope="col">Mot de passe</th>
                            <th scope="col">Date de naissance</th>
                            <th scope="col">Adresse</th>
                            <th scope="col">Code postal</th>
                            <th scope="col">Ville</th>
                            <th scope="col">Pays</th>
                            <th scope="col">Programme d'entrainement</th>
                            <th scope="col">Emailing</th>
                            <th scope="col">CGV</th>
                            <th scope="col">Club</th>
                            <th scope="col">Planning</th>
                            <th scope="col">Club</th>

                        </tr>
                    </thead>
                    <tbody>
                        {utilisateurs.map((utilisateur, i ) => (
                            <tr className="table-dark"
                                key={i}                            >
                                <td >{utilisateur.IDUser}</td>
                                <td >{utilisateur.Role}</td>
                                <td >{utilisateur.Civilite}</td>
                                <td >{utilisateur.Nom}</td>
                                <td >{utilisateur.Prenom}</td>
                                <td >{utilisateur.Email}</td>
                                <td >{utilisateur.Telephone}</td>
                                <td >{utilisateur.MDP}</td>
                                <td >{utilisateur.DateDeNaissance}</td>
                                <td >{utilisateur.Adresse}</td>
                                <td >{utilisateur.CodePostal}</td>
                                <td >{utilisateur.Ville}</td>
                                <td >{utilisateur.Pays}</td>
                                <td >{utilisateur.ProgrammeEntrainement}</td>
                                <td >{utilisateur.Emailing}</td>
                                <td >{utilisateur.CGV}</td>
                                <td >{utilisateur.Club}</td>
                                <td >{utilisateur.Planning_idPlanning}</td>
                                <td >{utilisateur.Club_IDClub}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}


const Title = styled.h1`
      margin-top: 2vw;
      font-family: 'Biryani', sans-serif;
      font-size: 30px;
      color: rgb(30, 30, 30)!important;
      color: white;
      text-align: center;
      `
