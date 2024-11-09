import { Banner } from "../../components/Banner/index.jsx";
import { ResultsBody } from "../../components/ResultsBody/index.jsx";
import { PageWidthContainer } from "../../components/styles/pageWidthContainer.js";

export function Results() {
  return (
    <>
      <Banner size={"m"}></Banner>
      <ResultsBody></ResultsBody>
    </>
  );
}
