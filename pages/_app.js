import "../styles/globals.css";
import Head from "next/head";
import "react-modal-video/css/modal-video.min.css";
import "react-multi-carousel/lib/styles.css";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// spinner disabled
NProgress.configure({ showSpinner: false });

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
