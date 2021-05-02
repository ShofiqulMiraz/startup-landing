import styles from "../styles/HeadingBig.module.scss";

export default function HeadingBig({ text }) {
  return <h1 className={styles.headingBig}> {text} </h1>;
}
