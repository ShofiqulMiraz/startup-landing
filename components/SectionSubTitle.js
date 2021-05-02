import styles from "../styles/SectionSubTitle.module.scss";

export default function SectionSubTitle({ text }) {
  return <p className={styles.sectionSubTitle}> {text} </p>;
}
