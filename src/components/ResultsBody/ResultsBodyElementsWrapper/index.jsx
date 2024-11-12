import styles from "./resultsBodyElementsWrapper.module.css";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { PaginatedList } from "../PaginatedList/index.jsx";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  ResultsToolbarDiv,
  StyledResultsBodyElementsWrapper,
  StyledResultsNumberTextFiled,
} from "../ResultsBody.styled.jsx";
import { HorizontalContainerCenter } from "../../styles/horizontalContainerCenter.styled.js";

export function ResultsBodyElementsWrapper({ arrayOfSMLinks }) {
  const arrayOfPaginationSettings = [6, 18, 36];
  const [numberOfCards, setNumberOfCards] = useState(6);

  const handleNumberOfCardsChange = (event) => {
    setNumberOfCards(event.target.value);
  };

  return (
    <StyledResultsBodyElementsWrapper>
      <ResultsToolbarDiv>
        <HorizontalContainerCenter>
          <Box>show</Box>
          <StyledResultsNumberTextFiled
            id="select-number-of-cards"
            select
            value={numberOfCards}
            onChange={handleNumberOfCardsChange}
            variant="outlined"
          >
            {arrayOfPaginationSettings.map((setting) => (
              <MenuItem key={setting} value={setting}>
                {setting}
              </MenuItem>
            ))}
          </StyledResultsNumberTextFiled>
          <Box>on the page</Box>
        </HorizontalContainerCenter>
        <div className={styles.sortButtonWrapper}>
          <Button>
            <Typography variant="sortButton">sort</Typography>
          </Button>
        </div>
      </ResultsToolbarDiv>
      <div className={styles.cardsWrapper}>
        <PaginatedList numberOfCards={numberOfCards}></PaginatedList>
      </div>
    </StyledResultsBodyElementsWrapper>
  );
}
