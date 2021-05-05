import styles from "../styles/QualityFeature.module.scss";
import CardWithLeftImage from "./CardWithLeftImage";
import Container from "./Container";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";
import SectionTop from "./SectionTop";

// all Quality feature data
const qualityFeatures = [
  {
    image: "/feature/performance.svg",
    title: "Fast Performance",
    text:
      "Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.",
  },
  {
    image: "/feature/partnership.svg",
    title: "Pro Subscription",
    text:
      "Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.",
  },
  {
    image: "/feature/subscription.svg",
    title: "Partnership deal",
    text:
      "Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.",
  },
  {
    image: "/feature/support.svg",
    title: "Customer Support",
    text:
      "Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.",
  },
];

export default function QualityFeature() {
  return (
    <section className={styles.qualityFeature}>
      <Container>
        <SectionTop>
          <div className={styles.qualityFeatureHead}>
            <SectionSubTitle text="QUALITY FEATURES" />
            <SectionTitle text="Amazing useful features" />
          </div>
        </SectionTop>
        <div className={styles.qualityFeatureCardGrid}>
          {qualityFeatures.map((feature, index) => (
            <div key={index}>
              <CardWithLeftImage
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
