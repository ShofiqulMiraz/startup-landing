import styles from "../styles/Services.module.scss";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";
import SectionTop from "./SectionTop";
import { IoIosPlay } from "react-icons/io";

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
  return (
    <section className={styles.services}>
      {/* <SectionTop>
        <SectionSubTitle text="our services" />
        <SectionTitle text="Business Goals Achieved with Design" />
      </SectionTop> */}
      <div className={styles.serviceLeft}>
        <img
          src="/service-thumb.png"
          alt="service"
          className={styles.serviceLeftImage}
        />
        <button className={styles.videoBtn}>
          <span>
            <IoIosPlay />
          </span>
        </button>
      </div>
      <div className="serviceRight">serviceRight</div>
    </section>
  );
}
