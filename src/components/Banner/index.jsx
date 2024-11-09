import { VerticalContainer } from "../styles/verticalContainer.styled.js";
import logoImage from "../../images/logo.png";
import vectorImage from "../../images/vector.png";
import gradientImage from "../../images/gradient.png";
import Typography from "@mui/material/Typography";
import { SearchBar } from "./SearchBar/index.jsx";
import { LandingPageLink } from "./LandingPageLink/index.jsx";
import { SearchButton } from "./SearchButton/index.jsx";
import { LayeredComponent } from "../styles/layeredComponent.styled.js";
import { GridElement } from "../styles/gridElement.styled.js";

export function Banner({ size }) {
  let bannerHeight = 0;
  if (size === "s") {
    bannerHeight = "20.83vw";
  } else if (size === "m") {
    bannerHeight = "36.38vw";
  } else if (size === "l") {
    bannerHeight = "52.15vw";
  }

  return (
    <VerticalContainer>
      <LayeredComponent>
        <GridElement>
          <img src={logoImage} alt={"logoImage"} />
        </GridElement>
        <GridElement>
          <VerticalContainer>
            <div>
              <img src={vectorImage} alt={"logoImage"} />
            </div>
            <Typography variant="h1">
              Find your place and experience it together.
            </Typography>
            <SearchBar></SearchBar>
            <LandingPageLink></LandingPageLink>
            <SearchButton></SearchButton>
          </VerticalContainer>
        </GridElement>
      </LayeredComponent>
      <div></div>
    </VerticalContainer>
  );
}
