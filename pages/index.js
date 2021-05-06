import Head from "next/head";
import CoreFeature from "../components/CoreFeature";
import Feature from "../components/Feature";
import Header from "../components/Header";
import Pricing from "../components/Pricing";
import QualityFeature from "../components/QualityFeature";
import Services from "../components/Services";
import WorkFlow from "../components/WorkFlow";

export default function Home() {
  return (
    <>
      <Head>
        <title>StartUp Landing</title>
      </Head>

      <Header />
      <Feature />
      <Services />
      <QualityFeature />
      <CoreFeature />
      <WorkFlow />
      <Pricing />
    </>
  );
}
