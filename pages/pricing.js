import Head from "next/head";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Pricing | StartUp Landing</title>
      </Head>
      <Nav />
      <Pricing />
      <Footer />
    </>
  );
}
