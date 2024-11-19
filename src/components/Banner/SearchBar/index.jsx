import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { HorizontalContainerCenter } from "../../../shared/styledComponents/horizontalContainerCenter.styled.js";
import { PageWidthContainer } from "../../../shared/styledComponents/pageWidthContainer.js";
import { SearchBarInputStyled } from "../../../shared/styledComponents/searchBarInput.styled.js";

const StyledTextField = ({
  placeholder,
  icon,
  endAdornmentClass,
  placeholderAlign,
}) => {
  return (
    <SearchBarInputStyled
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
