import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';


export default function Inscription() {
  const [form, setForm] = useState({
    Nom: ''
  })

  async function create(data) {
    try {
      fetch('http://local')
    } catch {

    }
  }

  return (
    <div>
      <Head>
        <title>Inscription</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Title>Veuillez remplir ce formulaire <br />afin de vous inscrire</Title>
      </div>
      <div className="jumbotron jumbotron-fluid">
        <div className="containerPerso">
          <form onSubmit={e => {
            e.preventDefault()
          }}>
            <fieldset>
              <div className="form-group">
                <label htmlFor="exampleSelect1" className="form-label mt-4">Civilité</label>
                <select className="form-select" id="exampleSelect1">
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">Nom</label>
                <input className="form-control" placeholder="Votre nom"
                  type="email"
                  value={form.Nom}
                  onChange={e => setForm({ ...form, Nom: e.target.value })}
                />
              </div>


              {/* <fieldset className="form-group">
                  <legend className="mt-4">Checkboxes</legend>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      Checked checkbox
                    </label>
                  </div>
                </fieldset> */}
            </fieldset>
            <button type="submit" value="" className="btn m-5 mx-auto">Connexion</button>

          </form>
        </div>
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
