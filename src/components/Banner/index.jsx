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
import { StyledBannerContainer } from "../styles/bannerContainer.styled.js";
import { StyledBackgroundTopImage } from "./Banner.styled.jsx";
import { StyledBackgroundBottomImage } from "./Banner.styled.jsx";

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
    <div>
      <StyledBannerContainer>
        <StyledBackgroundTopImage>
          <Typography variant="h1">
            Find your place and experience it together.
          </Typography>
          <VerticalContainer>
            <SearchBar></SearchBar>
            <LandingPageLink></LandingPageLink>
            <SearchButton></SearchButton>
          </VerticalContainer>
        </StyledBackgroundTopImage>
        <StyledBackgroundBottomImage />
      </StyledBannerContainer>

      <Divider></Divider>
    </div>
  );
}
