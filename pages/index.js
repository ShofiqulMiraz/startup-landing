import Head from "next/head";
import CoreFeature from "../components/CoreFeature";
import Feature from "../components/Feature";
import Header from "../components/Header";
import Pricing from "../components/Pricing";
import QualityFeature from "../components/QualityFeature";
import Services from "../components/Services";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import WorkFlow from "../components/WorkFlow";
import Footer from "../components/Footer";

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
      <Team />
      <Testimonial />
      <Footer />
    </>
  );
}
