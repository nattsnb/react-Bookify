import styled from "styled-components";
import topDecoration from "../../images/topDecoration.svg";
import bottomDecoration from "../../images/bottomDecoration.svg";

export const StyledBackgroundTopImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(${topDecoration});
  background-repeat: no-repeat;
`;

export const StyledBackgroundBottomImage = styled.div`
  background-image: url(${bottomDecoration});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
`;

export const StyledBannerContentContainer = styled.div`
  margin: 66px;
`;
