import styled from "styled-components";
import backgroundImage from "../../images/background.svg";

export const StyledBannerContainer = styled.div`
  background-image: url(${backgroundImage});
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 524px;
  background-repeat: no-repeat;
  background-size: cover;
`;
