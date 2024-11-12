import styled from "styled-components";
import { TextField, Toolbar } from "@mui/material";
import toolbarBackgroundImage from "../../images/toolbar.svg";

export const StyledDrawerToolbar = styled(Toolbar)`
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

export const StyledResultsBodyElementsWrapper = styled.div`
  width: 100%;
  margin-left: 70px;
`;

export const ResultsToolbarDiv = styled.div`
  height: 35px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledResultsNumberTextFiled = styled(TextField)`
  width: auto;

  & .MuiInputBase-input {
    color: var(--primary-main);
    font-weight: 600;
    text-align: center;
    padding: 0;
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-radius: 0;
    }
  }
  & .MuiSelect-icon {
    display: none;
  }
`;
