import styles from "./searchBar.module.css";
import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const StyledTextField = ({
  placeholder,
  icon,
  endAdornmentClass,
  placeholderAlign,
}) => {
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <AddIcon className={endAdornmentClass} />
          </InputAdornment>
        ),
      }}
      sx={{
        width: "16vw",
        height: "3.8vw",
        padding: 0,
        paddingLeft: "1.2vw",
        paddingRight: "1.2vw",
        justifyContent: "center",
        boxShadow: "2px 2px 2px 1px rgb(0 0 0 / 20%)",
        backgroundColor: "background.default",
        borderRadius: "15px",
        fontSize: "1.2vw",
        "& input": {
          textAlign: placeholderAlign, // Dynamically align placeholder
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none", // Remove the border
        },
      }}
    />
  );
};

const textFieldsDataArray = [
  {
    id: 0,
    placeholder: "localization",
    placeholderAlign: "left",
    icon: <Search className={styles.icon} />,
    endAdornmentClass: styles.hiddenIcon,
  },
  {
    id: 1,
    placeholder: "occasion",
    placeholderAlign: "left",
    icon: <Search className={styles.icon} />,
    endAdornmentClass: styles.hiddenIcon,
  },
  {
    id: 2,
    placeholder: "date",
    placeholderAlign: "left",
    icon: <CalendarMonthIcon className={styles.icon} />,
    endAdornmentClass: styles.hiddenIcon,
  },
  {
    id: 3,
    placeholder: "guests",
    placeholderAlign: "center",
    icon: <RemoveIcon className={styles.icon} />,
    endAdornmentClass: styles.icon,
  },
  {
    id: 4,
    placeholder: "venue type",
    placeholderAlign: "left",
    icon: <Search className={styles.icon} />,
    endAdornmentClass: styles.hiddenIcon,
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
          endAdornmentClass={dataEntry.endAdornmentClass}
          placeholderAlign={dataEntry.placeholderAlign} // Pass alignment setting
        />
      ))}
    </div>
  );
}
