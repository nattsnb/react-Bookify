import styles from "./resultsBody.module.css";

export function ResultsBody() {
  return (
    <div className={styles.container}>
      <div className={styles.filtersWrapper}>filters</div>
      <div className={styles.resultsWrapper}>results</div>
    </div>
  );
}
