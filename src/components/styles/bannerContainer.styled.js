import styled from "styled-components";
import backgroundImage from "../../images/background.svg";
import topDecorationImage from "../../images/topDecoration.svg";
import bottomDecorationImage from "../../images/bottomDecoration.svg";

export const StyledBannerContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 524px;
  //background-size: cover;
  background-image: url(${topDecorationImage}), url(${bottomDecorationImage}),
    url(${backgroundImage});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    top,
    bottom left,
    center;
`;
