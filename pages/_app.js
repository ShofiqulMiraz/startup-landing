import "../styles/globals.css";
import Head from "next/head";
import "react-modal-video/css/modal-video.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
