import styles from "../styles/WorkFlowCard.module.scss";

export default function WorkFlowCard({ index, title, description }) {
  return (
    <div className={styles.WorkFlowCard}>
      <div className={styles.index}> {`0${index + 1}`} </div>
      <h2 className={styles.title}> {title} </h2>
      <p className={styles.description}> {description} </p>
    </div>
  );
}
