
import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';
import { utilisateur_Civilite, utilisateur_Role } from '@prisma/client';

// export const getServerSideProps = async () => {
//     const utilisateurs = await prisma.utilisateur.findMany()
//     return {
//         props: {
//             utilisateurs: JSON.parse(JSON.stringify(utilisateurs)),
//         },
//     }
// }

export default function Inscription() {

    const [form, setForm] = useState({
        Role: '',
        Email: '',
        MDP: '',
        Civilite: '',
        Nom: '',
        Prenom: '',
        DateDeNaissance: '',
        Telephone: '',
        Adresse: '',
        CodePostal: '',
        Ville: '',
        Pays: '',
        Club: '',
        Emailing: '',
        ProgrammeEntrainement: '',
        CGV: ''
    })

    async function create(userData) {
        try {
            fetch('http://localhost:3000/api/create', {
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })
            // .then(() => setForm({
            //     Role: '', Email: '', MDP: '', Civilite: '', Nom: '', Prenom: '', DateDeNaissance: '', Telephone: '', Adresse: '', CodePostal: '', Ville: '', Pays: '', Club: '', Emailing: '', ProgrammeEntrainement: '', CGV: ''
            // }))
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = async (userData) => {
        try {
            create(userData)
        }catch (error){
            console.log(error)
        }
    }
    return (
        <div>
            <Head>
                <title>Créer un compte</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <Title>Créer un compte</Title>
            </div>
            <div className="container">
                <form onSubmit={e => {
                    e.preventDefault()
                    handleSubmit(form)
                }}>
                    <fieldset className="containerAdmin">
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="role" className="form-label mt-4">Role</label>
                                    <select className="form-select"
                                        name='Role'
                                        value={form.Role}
                                        onChange={e => setForm({ ...form, Role: e.target.value })}>
                                        <option ></option>
                                        <option >{utilisateur_Role.Admin}</option>
                                        <option >{utilisateur_Role.Coach}</option>
                                        <option >{utilisateur_Role.Adh_rent}</option>
                                        <option >{utilisateur_Role.Inscrit}</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label mt-4">Email</label>
                                    <input className="form-control" placeholder="Email"
                                        name='Email'
                                        type="email"
                                        value={form.Email}
                                        onChange={e => setForm({ ...form, Email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="mdp" className="form-label mt-4">Mot de passe</label>
                                    <input className="form-control" placeholder="Mot de passe"
                                        type="password"
                                        value={form.MDP}
                                        onChange={e => setForm({ ...form, MDP: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col">
                                <label htmlFor="civilite" className="form-label mt-4">Civilité</label>
                                <select className="form-select"
                                    name='Civilite'
                                    value={form.Civilite}
                                    onChange={e => setForm({ ...form, Civilite: e.target.value })}>
                                    <option ></option>
                                    <option>{utilisateur_Civilite.Madame}</option>
                                    <option>{utilisateur_Civilite.Monsieur}</option>
                                </select>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="Nom" className="form-label mt-4">Nom</label>
                                    <input className="form-control" placeholder="Nom"
                                        type="text"
                                        value={form.Nom}
                                        onChange={e => setForm({ ...form, Nom: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="Prenom" className="form-label mt-4">Prénom</label>
                                    <input className="form-control" placeholder="Prénom"
                                        type="text"
                                        value={form.Prenom}
                                        onChange={e => setForm({ ...form, Prenom: e.target.value })}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="dateDeNaissance" className="form-label mt-4">Date de naissance</label>
                                    <input className="form-control" placeholder="Date de naissance"
                                        type="date"
                                        value={form.DateDeNaissance}
                                        onChange={e => setForm({ ...form, DateDeNaissance: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="telephone" className="form-label mt-4">Téléphone</label>
                                    <input className="form-control" placeholder="Téléphone"
                                        type="tel"
                                        pattern="[0-9]{10}"
                                        value={form.Telephone}
                                        onChange={e => setForm({ ...form, Telephone: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="adresse" className="form-label mt-4">Adresse</label>
                                    <input className="form-control" placeholder="Adresse"
                                        type="text"
                                        value={form.Adresse}
                                        onChange={e => setForm({ ...form, Adresse: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="codePostal" className="form-label mt-4">Code postal</label>
                                    <input className="form-control" placeholder="Code postal"
                                        type="number"
                                        value={form.CodePostal}
                                        onChange={e => setForm({ ...form, CodePostal: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="ville" className="form-label mt-4">Ville</label>
                                    <input className="form-control" placeholder="Ville"
                                        type="text"
                                        value={form.Ville}
                                        onChange={e => setForm({ ...form, Ville: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="pays" className="form-label mt-4">Pays</label>
                                    <input className="form-control" placeholder="Pays"
                                        type="text"
                                        value={form.Pays}
                                        onChange={e => setForm({ ...form, Pays: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="club" className="form-label mt-4">Club</label>
                                    <input className="form-control" placeholder="Club"
                                        value={form.Club}
                                        onChange={e => setForm({ ...form, Club: e.target.value })} type="text"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4 mx-auto">
                            <div className=" col-2 form-check">
                                <input className="form-check-input" type="checkbox"
                                    value={form.Emailing}
                                    onChange={e => setForm({ ...form, Emailing: e.target.value })} />
                                <label className="form-check-label" htmlFor="emailing">
                                    Emailing
                                </label>
                            </div>
                            <div className=" col-4 form-check">
                                <input className="form-check-input" type="checkbox"
                                    value={form.ProgrammeEntrainement}
                                    onChange={e => setForm({ ...form, ProgrammeEntrainement: e.target.value })} />
                                <label className="form-check-label" htmlFor="programme">
                                    Programme d'entrainement  </label>
                            </div>
                            <div className=" col form-check">
                                <input className="form-check-input" type="checkbox"
                                    value={form.CGV}
                                    onChange={e => setForm({ ...form, CGV: e.target.value })} />
                                <label className="form-check-label" htmlFor="cgv">
                                    CGV
                                </label>
                            </div>
                            <button type="submit" className="btn m-5 mx-auto">Créer</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

const Title = styled.h1`
            margin: 1vw 0 -1vw;
            font-family: 'Biryani', sans-serif;
            font-size: 30px;
            color: rgb(30, 30, 30)!important;
            color: white;
            text-align: center;
            `
