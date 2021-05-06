import styles from "../styles/WorkFlow.module.scss";
import Container from "./Container";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";
import SectionTop from "./SectionTop";
import WorkFlowCard from "./WorkFlowCard";

const workFlowData = [
  {
    title: "Set disbursement Instructions",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    title: "Assembly retrieves funds from your account",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    title: "Assembly initiates disbursement",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    title: "Customer receives funds payment",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
];

export default function WorkFlow() {
  return (
    <section className={styles.workFlow}>
      <Container>
        <SectionTop>
          <div className={styles.workFlowHead}>
            <SectionSubTitle text="WHATS THE FUNCTION" />
            <SectionTitle text="Meet the feature of our product" />
          </div>
        </SectionTop>
        <div className={styles.grid}>
          {workFlowData.map((feature, index) => (
            <div key={index}>
              <WorkFlowCard
                index={index}
                title={feature.title}
                description={feature.text}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
