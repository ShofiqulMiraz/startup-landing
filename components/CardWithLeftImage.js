import styles from "../styles/CardWithLeftImage.module.scss";

export default function CardWithLeftImage({ image, title, paragraph }) {
  return (
    <div className={styles.cardContainer}>
      <div>
        <img src={image} alt={title} className={styles.cardImage} />
      </div>
      <div>
        <h2 className={styles.cardTitle}> {title} </h2>
        <p className={styles.cardParagraph}> {paragraph} </p>
      </div>
    </div>
  );
}
