import styles from "../styles/CoreFeature.module.scss";
import Button from "./Button";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";

export default function CoreFeature() {
  return (
    <section className={styles.coreFeature}>
      <div className={styles.coreFeatureLeft}>
        <SectionSubTitle text="CORE FEATURES" />
        <SectionTitle text="Smart Jackpots that you may love this anytime & anywhere" />
        <p className={styles.coreFeatureLeftPara}>
          Get your tests delivered at let home collect sample from the victory
          of the managements that supplies best design system guidelines ever.
        </p>
        <Button text="Get Started" />
      </div>
      <div className={styles.coreFeatureRight}>
        <img
          src="/core-feature.png"
          alt="core-feature"
          className={styles.coreFeatureRightImage}
        />
      </div>
    </section>
  );
}
