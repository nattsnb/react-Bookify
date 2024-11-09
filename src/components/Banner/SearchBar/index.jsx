import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { HorizontalContainerCenter } from "../../styles/horizontalContainerCenter.styled.js";
import { PageWidthContainer } from "../../styles/pageWidthContainer.js";

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
        width: "220px",
        height: "48px",
        padding: 0,
        paddingLeft: "5px",
        paddingRight: "5px",
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
    icon: <Search />,
  },
  {
    id: 1,
    placeholder: "occasion",
    placeholderAlign: "left",
    icon: <Search />,
  },
  {
    id: 2,
    placeholder: "date",
    placeholderAlign: "left",
    icon: <CalendarMonthIcon />,
  },
  {
    id: 3,
    placeholder: "guests",
    placeholderAlign: "center",
    icon: <RemoveIcon />,
  },
  {
    id: 4,
    placeholder: "venue type",
    placeholderAlign: "left",
    icon: <Search />,
  },
];

export function SearchBar() {
  return (
    <PageWidthContainer>
      <HorizontalContainerCenter>
        {textFieldsDataArray.map((dataEntry) => (
          <StyledTextField
            key={dataEntry.id}
            placeholder={dataEntry.placeholder}
            icon={dataEntry.icon}
            endAdornmentClass={dataEntry.endAdornmentClass}
            placeholderAlign={dataEntry.placeholderAlign}
          />
        ))}
      </HorizontalContainerCenter>
    </PageWidthContainer>
  );
}
