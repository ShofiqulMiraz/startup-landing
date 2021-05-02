import styles from "../styles/HeadingMedium.module.scss";

export default function HeadingMedium({ text }) {
  return <h2 className={styles.HeadingMedium}>{text}</h2>;
}
