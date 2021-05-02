import Head from "next/head";
import Feature from "../components/Feature";
import Header from "../components/Header";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>StartUp Landing</title>
      </Head>

      <Header />
      <Feature />
      <Services />
    </>
  );
}
