import styles from "../styles/Testimonial.module.scss";
import Container from "./Container";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";
import SectionTop from "./SectionTop";

export default function Testimonial() {
  return (
    <section className={styles.testimonial}>
      <Container>
        <SectionTop>
          <div className={styles.head}>
            <SectionSubTitle text="TESTIMONIAL" />
            <SectionTitle text="Meet Client Satisfaction" />
          </div>
        </SectionTop>
      </Container>
    </section>
  );
}
