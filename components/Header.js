import styles from "../styles/Header.module.scss";
import Button from "./Button";
import HeadingBig from "./HeadingBig";

export default function Header() {
  return (
    <section>
      <div className={styles.headerUpper}>
        <HeadingBig text="Top Quality Digital Products to Explore" />
        <p className={styles.headerPara}>
          Check out our website to find great software products and deals! If
          you need a website or a web application this is the place to go!
        </p>
        <Button text="Explore" />
      </div>
      <div className={styles.headerLower}>
        <img
          src="/banner-thumb.png"
          alt="banner"
          className={styles.bannerImage}
        />
      </div>
    </section>
  );
}
