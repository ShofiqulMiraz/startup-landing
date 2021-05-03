import styles from "../styles/Services.module.scss";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";
import SectionTop from "./SectionTop";
import { IoIosPlay } from "react-icons/io";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import CardWithLeftImage from "./CardWithLeftImage";

// services data

const services = [
  {
    image: "/services/smart.svg",
    title: "Smart Features",
    text:
      "Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.",
  },
  {
    image: "/services/secure.svg",
    title: "Secure Contents",
    text:
      "Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.",
  },
];

export default function Services() {
  const [isVideoOpen, setVideoOpen] = useState(false);
  return (
    <>
      <section className={styles.services}>
        <div className={styles.serviceLeft}>
          <img
            src="/service-thumb.png"
            alt="service"
            className={styles.serviceLeftImage}
          />
          <button
            className={styles.videoBtn}
            onClick={() => setVideoOpen(true)}
          >
            <span>
              <IoIosPlay />
            </span>
          </button>
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={isVideoOpen}
          videoId="mZ4Rs22lNP0"
          onClose={() => setVideoOpen(false)}
        />
        <div className={styles.serviceRight}>
          <SectionSubTitle text="our services" />
          <SectionTitle text="Business Goals Achieved with Design" />

          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <CardWithLeftImage
                image={service.image}
                title={service.title}
                paragraph={service.text}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
