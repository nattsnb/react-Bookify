import { Banner } from "../../components/Banner/index.jsx";
import { ResultsBody } from "../../components/ResultsBody/index.jsx";
import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.js";

export function Results() {
  return (
    <PageWidthContainer>
      <Banner size={"m"}></Banner>
      <ResultsBody></ResultsBody>
    </PageWidthContainer>
  );
}
