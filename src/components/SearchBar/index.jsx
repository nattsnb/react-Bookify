import styles from "./searchBar.module.css";
import { InputAdornment, TextField } from "@mui/material";
import * as PropTypes from "prop-types";
import { Search } from '@mui/icons-material';

const StyledTextField = ({ placeholder, icon }) => {
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
                {icon}
            </InputAdornment>
          ),
          sx: {
            width: "16vw",
            height: "3.5vw",
            backgroundColor: "background.default",
            borderRadius: "25px",
            fontSize: "1.2vw",
            "& fieldset": {
              borderColor: "grey.400",
            },
            "&:hover fieldset": {
              borderColor: "grey.600",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
            },
          },
        },
      }}
    />
  );
};

export function SearchBar() {
  return (
    <div className={styles.searchBarWrapper}>
      <StyledTextField placeholder="loclization" icon={Search} />
      <StyledTextField placeholder="occasion" icon="search" />
      <StyledTextField placeholder="venue type" icon="search" />
      <StyledTextField placeholder="date" icon="search" />
      <StyledTextField placeholder="guests" icon="search" />
    </div>
  );
}
