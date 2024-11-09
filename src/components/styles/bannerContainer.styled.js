import styled from "styled-components";
import gradientImage from "../../images/gradient.png";

export const BannerContainer = styled.div`
  background-image: url(${gradientImage});
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 736px;
  background-repeat: no-repeat;
  background-size: cover;
`;
