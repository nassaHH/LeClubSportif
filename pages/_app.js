import "../styles/bootstrap.min.css";
import styles from '../styles/globals.css'
import Nav from './nav'
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react"


export default function App({
  Component,
  pageProps: { session, ...pageProps },  
}) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <SessionProvider session={session}>
      <Nav />
      <Component {...pageProps} />
    </SessionProvider>
  )
}






