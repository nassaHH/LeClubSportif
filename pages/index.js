import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Accueil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="jumbotron jumbotron-fluid">
        <div className="containerPerso">
          <div className="col-md-6">
            <ImageHeader
              src="/../public/img/4.jpg"
              height={1920}
              width={1080}
              alt="?"
            />
          </div>
          <div className="col-md-6 mt-5">
            <Name className="display-2 text-light">Le Club Sportif</Name>
            <Texte className="lead text-light">Tu vois la vie c'est le sport, et si tu es comme moi, tu aimes le sport et le sport t'aime aussi. <br />Je sais parfois c'est difficile, on est fatigué mais je te garantie qu'il n'y a rien de meilleur au monde que de prendre une douche bien chaude apres avoir transpiré comme un boeuf dans une salle de sport bondé par des personnes que tu ne connais pas, covidé qui pue. </Texte>
            <div className='text-center'>
              <button type="button" className="btn m-4 ">Inscription</button>
              <button type="button" className="btn m-4 ">Connexion</button>
            </div>
          </div>
        </div>
      </div>
      {/* <ImageHeader
              src="/../public/img/4.jpg"
              height={1920}
              width={1080}
              alt="?"
            /> */}
    </div>
  )
}

const Name = styled.h1`
  margin-top: 2vw;
  font-family: 'Biryani', sans-serif;
  font-size: 60px;
  color: rgb(30, 30, 30)!important;
`

const ImageHeader = styled(Image)`
  max-width: 80%;
`
const Texte = styled.p`
  color: white ;
  margin: 3vw ;
  font-size: 20px ;
`

