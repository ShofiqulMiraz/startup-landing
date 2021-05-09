import Head from "next/head";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function TestimonialPage() {
  return (
    <>
      <Head>
        <title>Testimonial | StartUp Landing</title>
      </Head>
      <Nav />
      <Testimonial />
      <Footer />
    </>
  );
}
