import styles from "../styles/PriceCard.module.scss";
import Button from "./Button";

export default function PriceCard({ plan }) {
  return (
    <div className={styles.pricingBox}>
      <div className={styles.pricingHeader}>
        <h3> {plan.name} </h3>
        <p> {plan.description} </p>
      </div>
      <List items={plan.points} />
      <h2 className={styles.price}>
        {plan.priceWithUnit}
        <span>/Monthly</span>
      </h2>
      <div className={styles.buttonGroup}>
        <Button text={plan.buttonText} />
        {plan?.anotherOption && (
          <div className={styles.freeTrial}> {plan?.anotherOption} </div>
        )}
      </div>
    </div>
  );
}

function List({ items }) {
  return (
    <ul style={{ listStyle: "none" }}>
      {items.map((item) => (
        <li key={item.id} style={{ display: "flex", marginBottom: "5px" }}>
          <div className={styles.listIcon}>{item.icon}</div>
          <p style={{ fontWeight: "100" }}>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
