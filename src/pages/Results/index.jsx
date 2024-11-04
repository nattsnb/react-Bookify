import styles from "./results.module.css";
import { Banner } from "../../components/Banner/index.jsx";
import { ResultsBody } from "../../components/ResultsBody/index.jsx";

export function Results() {
  return (
    <div className={styles.container}>
      <Banner size={"m"}></Banner>
      <ResultsBody></ResultsBody>
    </div>
  );
}
