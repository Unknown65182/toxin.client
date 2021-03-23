import "normalize.css";
import "../src/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

function Toxin({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5 shrink-to-fit=no"
        />
        <meta name="description" content="Toxin web store" />
        <link
          rel="canonical"
          href={`https://toxin.vercel.app${router.pathname}`}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Toxin;
