import { VerticalContainer } from "../styles/verticalContainer.styled.js";
import Typography from "@mui/material/Typography";
import { SearchBar } from "./SearchBar/index.jsx";
import { LandingPageLink } from "./LandingPageLink/index.jsx";
import { SearchButton } from "./SearchButton/index.jsx";
import { Divider } from "@mui/material";
import { StyledBannerContainer } from "../styles/bannerContainer.styled.js";
import {
  StyledBackgroundTopImage,
  StyledBannerContentContainer,
} from "./Banner.styled.jsx";
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
          <StyledBannerContentContainer>
            <Typography variant="h1">
              Find your place and experience it together.
            </Typography>
            <VerticalContainer>
              <SearchBar></SearchBar>
              <LandingPageLink></LandingPageLink>
              <SearchButton></SearchButton>
            </VerticalContainer>
          </StyledBannerContentContainer>
        </StyledBackgroundTopImage>
        <StyledBackgroundBottomImage />
      </StyledBannerContainer>

      <Divider></Divider>
    </div>
  );
}
