import styles from "../styles/SectionTitle.module.scss";

export default function SectionTitle({ text }) {
  return <h3 className={styles.sectionTitle}> {text} </h3>;
}
