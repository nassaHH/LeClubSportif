import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { signIn } from "next-auth/react";


export default function Nav() {

  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container-fluid">
        <button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <Logo className="navbar-brand position-absolute" href="/">Le Club Sportif</Logo>
          <ul className="navbar-nav me-auto mx-auto">
            <li className="nav-item">
              <LinkPerso className={`nav-link ${router.pathname == "/" ? "active" : ""}`}
                href="/">Accueil
                <span className="visually-hidden">(current)</span>
              </LinkPerso>
            </li>
            <li className="nav-item">
              <LinkPerso className={`nav-link ${router.pathname == "/compte" ? "active" : ""}`}
                href="/">A propos</LinkPerso>
            </li>
            <li className="nav-item">
              <LinkPerso className={`nav-link ${router.pathname == "/infos" ? "active" : ""}`}
                href="/">Infos</LinkPerso>
            </li>
            <li className="nav-item">
              <LinkPerso className={`nav-link ${router.pathname == "/contact" ? "active" : ""}`}
                href="/">Contact</LinkPerso>
            </li>
            <li className="nav-item dropdown">
              <LinkPerso className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Admin</LinkPerso>
              <div className="dropdown-menu">
                <LinkPerso className="dropdown-item" href="/admin/listeUtilisateur">Utilisateur</LinkPerso>
                <LinkPerso className="dropdown-item" href="#"></LinkPerso>
                <LinkPerso className="dropdown-item" href="#"></LinkPerso>
                <div className="dropdown-divider"></div>
                <LinkPerso className="dropdown-item" href="#"></LinkPerso>
              </div>
            </li>
          </ul>
          {/* <input className="form-control me-sm-2" type="search" placeholder="Search"></input>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button> */}
          <div className='position-absolute top-0 end-0'>
            <LinkPerso href="/compte/Inscription" className="btn m-2 ">Inscription</LinkPerso>
            <LinkPerso href="" className="btn m-2" 
              onClick={ ()=>{ signIn()}}>Connexion</LinkPerso>
          </div>

        </div>
      </div>
    </nav>

  )
}
const Logo = styled.a`
  margin-top: 10px;
  font-family: 'Biryani', sans-serif;
  color: rgb(30, 30, 30);
  font-size: 30px;
  :hover, :focus{
    color: rgb(30, 30, 30)!important;
  }
`

const Button = styled.button`
  padding: 10px;
`

export const LinkPerso = styled(Link)`
  margin: 0 10px;
  padding: 10px!important;
  text-transform: uppercase;
  transition: all 0.6s ;
  :hover{
    border-radius: 10px;
    -webkit-border-radius: 10px ;
    -moz-border-radius: 10px ;
    box-shadow: 5px 5px 5px rgb(0 0 0 / 40%), 
                -1px -1px 5px rgb(255 255 255 / 40%)!important;
    font-weight: 400; 
    color: white!important;
    background: #2a658e;
    transition: all 0.6s ;
}
`
