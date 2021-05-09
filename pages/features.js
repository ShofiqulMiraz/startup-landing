import Head from "next/head";
import CoreFeature from "../components/CoreFeature";
import QualityFeature from "../components/QualityFeature";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function FeaturesPage() {
  return (
    <>
      <Head>
        <title>Features | StartUp Landing</title>
      </Head>
      <Nav />
      <QualityFeature />
      <CoreFeature />
      <Footer />
    </>
  );
}
