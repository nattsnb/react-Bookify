import { VerticalContainer } from "../../shared/styledComponents/verticalContainer.styled.js";
import Typography from "@mui/material/Typography";
import { SearchBar } from "./SearchBar/index.jsx";
import { LandingPageLink } from "./LandingPageLink/index.jsx";
import { SearchButton } from "./SearchButton/index.jsx";
import { Divider } from "@mui/material";
import { StyledBannerContainer } from "./Banner.styled.jsx";
import { StyledBannerContentContainer } from "./Banner.styled.jsx";

export function Banner() {
  return (
    <div>
      <StyledBannerContainer>
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
      </StyledBannerContainer>

      <Divider></Divider>
    </div>
  );
}
