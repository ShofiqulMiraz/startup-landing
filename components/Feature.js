import styles from "../styles/Feature.module.scss";
import CardWithTopImage from "./CardWithTopImage";
import Container from "./Container";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";
import SectionTop from "./SectionTop";

// all feature data
const features = [
  {
    image: "/feature/performance.svg",
    title: "Fast Performance",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    image: "/feature/partnership.svg",
    title: "Pro Subscription",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    image: "/feature/subscription.svg",
    title: "Partnership deal",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    image: "/feature/support.svg",
    title: "Customer Support",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
];

export default function Feature() {
  return (
    <section className={styles.feature}>
      <Container>
        <SectionTop>
          <SectionSubTitle text="WHATS THE FUNCTION" />
          <SectionTitle text="Meet the feature of our product" />
        </SectionTop>
        <div className={styles.featureCardGrid}>
          {features.map((feature, index) => (
            <div key={index}>
              <CardWithTopImage
                image={feature.image}
                title={feature.title}
                paragraph={feature.text}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
