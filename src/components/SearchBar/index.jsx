import styles from "./searchBar.module.css";
import { InputAdornment, TextField } from "@mui/material";
import * as PropTypes from "prop-types";
import { Search } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RemoveIcon from "@mui/icons-material/Remove";

const StyledTextField = ({ placeholder, icon }) => {
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
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
const textFieldsDataArray = [
  {
    id: 0,
    placeholder: "localization",
    icon: <Search className={styles.icon} />,
  },
  {
    id: 1,
    placeholder: "occasion",
    icon: <Search className={styles.icon} />,
  },
  {
    id: 2,
    placeholder: "date",
    icon: <CalendarMonthIcon className={styles.icon} />,
  },
  {
    id: 3,
    placeholder: "guests",
    icon: <RemoveIcon className={styles.icon} />,
  },
  {
    id: 4,
    placeholder: "venue type",
    icon: <Search className={styles.icon} />,
  },
];
export function SearchBar() {
  return (
    <div className={styles.searchBarWrapper}>
      {textFieldsDataArray.map((dataEntry) => (
        <StyledTextField
          key={dataEntry.id}
          placeholder={dataEntry.placeholder}
          icon={dataEntry.icon}
        ></StyledTextField>
      ))}
    </div>
  );
}
