import styles from "../styles/Rating.module.scss";
import { FaStar } from "react-icons/fa";

export default function Rating({ rating }) {
  const totalRating = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(
        <li key={i} className={styles.star}>
          <FaStar />
        </li>
      );
    } else {
      totalRating.push(
        <li key={i} className={styles.star_o}>
          <FaStar />
        </li>
      );
    }
  }
  return (
    <div className={styles.rating}>
      <ul>{totalRating}</ul>
    </div>
  );
}
