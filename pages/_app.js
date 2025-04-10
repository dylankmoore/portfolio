/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/prop-types */
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
