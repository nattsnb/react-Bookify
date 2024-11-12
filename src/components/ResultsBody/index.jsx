import { FiltersDrawer } from "./FiltersDrawer/index.jsx";
import { ResultsBodyElementsWrapper } from "./ResultsBodyElementsWrapper/index.jsx";
import { PageWidthContainer } from "../styles/pageWidthContainer.js";
import { HorizontalContainerTop } from "../styles/horizontalContainerTop.styled.js";
import { BodyContentContainerStyled } from "../styles/bodyContentContainer.styled.js";

export function ResultsBody() {
  return (
    <PageWidthContainer>
      <BodyContentContainerStyled>
        <HorizontalContainerTop>
          <FiltersDrawer></FiltersDrawer>
          <ResultsBodyElementsWrapper></ResultsBodyElementsWrapper>
        </HorizontalContainerTop>
      </BodyContentContainerStyled>
    </PageWidthContainer>
  );
}
