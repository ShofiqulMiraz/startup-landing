import styles from "../styles/Button.module.scss";

export default function Button({ text }) {
  return <button className={styles.button}> {text} </button>;
}
