import { VerticalContainer } from "../styles/verticalContainer.styled.js";
import logoImage from "../../images/logo.png";
import vectorImage from "../../images/vector.png";
import gradientImage from "../../images/gradient.png";
import Typography from "@mui/material/Typography";
import { SearchBar } from "./SearchBar/index.jsx";
import { LandingPageLink } from "./LandingPageLink/index.jsx";
import { SearchButton } from "./SearchButton/index.jsx";
import { PageWidthContainer } from "../styles/pageWidthContainer.js";
import { Divider } from "@mui/material";

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
    <PageWidthContainer>
      <VerticalContainer>
        <Typography variant="h1">
          Find your place and experience it together.
        </Typography>
        <SearchBar></SearchBar>
        <LandingPageLink></LandingPageLink>
        <SearchButton></SearchButton>
      </VerticalContainer>
      <Divider></Divider>
    </PageWidthContainer>
  );
}
