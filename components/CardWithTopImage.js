import styles from "../styles/CardWithTopImage.module.scss";

export default function CardWithTopImage({ image, title, paragraph }) {
  return (
    <div className={styles.cardContainer}>
      <img src={image} alt={title} className={styles.cardImage} />
      <h2 className={styles.cardTitle}> {title} </h2>
      <p className={styles.cardParagraph}> {paragraph} </p>
    </div>
  );
}
