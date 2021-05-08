import styles from "../styles/TestimonialButtonGroup.module.scss";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Container from "./Container";

export default function TestimonialButtonGroup({ next, previous }) {
  return (
    <div className={styles.buttonGroupContainer}>
      <Container>
        <div className={styles.buttonGroupSlider}>
          <button onClick={previous} aria-label="Previous">
            <IoIosArrowRoundBack />
          </button>
          <button onClick={next} aria-label="Next">
            <IoIosArrowRoundForward />
          </button>
        </div>
      </Container>
    </div>
  );
}
