import styles from "./resultsBody.module.css";
import { FiltersDrawer } from "./FiltersDrawer/index.jsx";

export function ResultsBody() {
  return (
    <div className={styles.container}>
      <div className={styles.filtersWrapper}>
        <FiltersDrawer></FiltersDrawer>
      </div>
      <div className={styles.resultsWrapper}>results</div>
    </div>
  );
}
