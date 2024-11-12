import styled from "styled-components";
import { Toolbar } from "@mui/material";
import toolbarBackgroundImage from "../../../images/toolbar.svg";

export const StyledToolbar = styled(Toolbar)`
  background-image: url(${toolbarBackgroundImage});
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 282px;
  width: 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 70px;
`;
