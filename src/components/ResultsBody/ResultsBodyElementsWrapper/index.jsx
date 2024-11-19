import { Box, Button, MenuItem } from "@mui/material";
import { PaginatedList } from "../PaginatedList/index.jsx";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  DisplayNumberWrapper,
  ResultsToolbarDiv,
  StyledResultsBodyElementsWrapper,
  StyledResultsNumberTextFiled,
} from "../ResultsBody.styled.jsx";
import { HorizontalContainerCenter } from "../../../shared/styledComponents/horizontalContainerCenter.styled.js";

export function ResultsBodyElementsWrapper({ arrayOfSMLinks }) {
  const arrayOfPaginationSettings = [6, 18, 36];
  const [limit, setLimit] = useState(6);

  const handleNumberOfCardsChange = (event) => {
    setLimit(event.target.value);
  };

  return (
    <StyledResultsBodyElementsWrapper>
      <ResultsToolbarDiv>
        <HorizontalContainerCenter>
          <Box>show</Box>
          <DisplayNumberWrapper>
            <StyledResultsNumberTextFiled
              id="select-number-of-cards"
              select
              value={limit}
              onChange={handleNumberOfCardsChange}
              variant="outlined"
            >
              {arrayOfPaginationSettings.map((setting) => (
                <MenuItem key={setting} value={setting}>
                  {setting}
                </MenuItem>
              ))}
            </StyledResultsNumberTextFiled>
          </DisplayNumberWrapper>

          <Box>on the page</Box>
        </HorizontalContainerCenter>
        <Button>
          <Typography variant="sortButton">sort</Typography>
        </Button>
      </ResultsToolbarDiv>
      <PaginatedList limit={limit}></PaginatedList>
    </StyledResultsBodyElementsWrapper>
  );
}
