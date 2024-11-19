import styled from "styled-components";
import topDecorationImage from "../../images/topDecoration.svg";
import bottomDecorationImage from "../../images/bottomDecoration.svg";
import backgroundImage from "../../images/background.svg";

export const StyledBannerContentContainer = styled.div`
  margin: 66px;
`;

export const StyledBannerContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 524px;
  background-image: url(${topDecorationImage}), url(${bottomDecorationImage}),
    url(${backgroundImage});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    top,
    bottom left,
    center;
`;
