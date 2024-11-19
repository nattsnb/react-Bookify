import { FiltersDrawer } from "./FiltersDrawer/index.jsx";
import { ResultsBodyElementsWrapper } from "./ResultsBodyElementsWrapper/index.jsx";
import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.js";
import { HorizontalContainerTop } from "../../shared/styledComponents/horizontalContainerTop.styled.js";
import { BodyContentContainerStyled } from "../../shared/styledComponents/bodyContentContainer.styled.js";

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
