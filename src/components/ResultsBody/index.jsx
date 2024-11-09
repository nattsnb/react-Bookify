import styles from "./resultsBody.module.css";
import { FiltersDrawer } from "./FiltersDrawer/index.jsx";
import { ResultsBodyElementsWrapper } from "./ResultsBodyElementsWrapper/index.jsx";
import { PageWidthContainer } from "../styles/pageWidthContainer.js";
import { HorizontalContainerTop } from "../styles/horizontalContainerTop.styled.js";

export function ResultsBody() {
  return (
    <PageWidthContainer>
      <HorizontalContainerTop>
        <div className={styles.filtersWrapper}>
          <FiltersDrawer></FiltersDrawer>
        </div>
        <div className={styles.resultsWrapper}>
          <ResultsBodyElementsWrapper></ResultsBodyElementsWrapper>
        </div>
      </HorizontalContainerTop>
    </PageWidthContainer>
  );
}
