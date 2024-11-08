import styles from "./resultsBodyElementsWrapper.module.css";
import {
  Autocomplete,
  Box,
  Button,
  Icon,
  Link,
  MenuItem,
  TextField,
} from "@mui/material";
import { PaginatedList } from "../PaginatedList/index.jsx";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";

export function ResultsBodyElementsWrapper({ arrayOfSMLinks }) {
  const arrayOfPaginationSettings = [6, 18, 36];
  const [numberOfCards, setNumberOfCards] = useState(6);

  const handleNumberOfCardsChange = (event) => {
    setNumberOfCards(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <div className={styles.paginationSettingsWrapper}>
          <Box>show</Box>
          <Box className={styles.textFieldBox}>
            <div>
              <TextField
                id="select-number-of-cards"
                select
                value={numberOfCards}
                onChange={handleNumberOfCardsChange}
                className={styles.textField}
                variant="outlined"
                SelectProps={{ IconComponent: () => null }}
                sx={{
                  "& .MuiOutlinedInput-input": {
                    padding: "0 !important", // Usunięcie paddingu
                    display: "flex",
                    alignItems: "center",
                  },
                  "& .MuiSelect-select": {
                    padding: "0 !important", // Usunięcie paddingu
                    display: "flex",
                    alignItems: "center",
                  },
                }}
              >
                {arrayOfPaginationSettings.map((setting) => (
                  <MenuItem key={setting} value={setting}>
                    {setting}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Box>
          <Box>on the page</Box>
        </div>
        <div className={styles.sortButtonWrapper}>
          <Button>
            <Typography variant="sortButton">sort</Typography>
          </Button>
        </div>
      </div>
      <div className={styles.cardsWrapper}>
        <PaginatedList numberOfCards={numberOfCards}></PaginatedList>
      </div>
    </div>
  );
}
