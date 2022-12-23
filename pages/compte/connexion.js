import Head from 'next/head';
import styled from 'styled-components';
import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";


export default function Connexion() {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const res = await signIn("credentials", {
        email: userInfo.email,
        password: userInfo.password,
        redirect: false,
      });
  
      console.log(res);
    };
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Title>Connexion à votre compte</Title>
      </div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className="col-md-3 mx-auto">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email</label>
                  <input type="email" className="form-control" id="1" placeholder="Entrer votre email"
                        value={userInfo.email} 
                        onChange={({ target}) => setUserInfo({...userInfo, email: target.value })
                        }/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="form-label mt-4">Mot de passe</label>
                  <input type="password" className="form-control" id="2" placeholder="Enter votre mot de passe" 
                   value={userInfo.password} 
                   onChange={({ target }) => setUserInfo({...userInfo, password: target.value })
                      }
                   />
                </div>
                <button type="submit" value="login" className="btn m-5 mx-auto">Connexion</button>
              </div>
            </fieldset>
          </form>
        </div>

  )
}

const Title = styled.h1`
      margin-top: 2vw;
      margin-bottom: 5vw;
      font-family: 'Biryani', sans-serif;
      font-size: 30px;
      color: rgb(30, 30, 30)!important;
      color: white;
      text-align: center;
      `
