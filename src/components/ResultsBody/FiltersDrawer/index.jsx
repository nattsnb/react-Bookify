import {
  Button,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StyledDrawerToolbar } from "../ResultsBody.styled.jsx";
import { HiddenElement } from "../../styles/hiddenElement.styled.js";
import { RectangularFrame } from "../../styles/rectangularFrame.styled.js";

export function FiltersDrawer() {
  const arrayOfFilters = [
    { id: 0, name: "price range" },
    { id: 1, name: "amenities" },
    { id: 2, name: "room amenities" },
    { id: 3, name: "neighbourhoods" },
    { id: 4, name: "handicap accessibility" },
  ];
  return (
    <RectangularFrame>
      <StyledDrawerToolbar>
        <HiddenElement>
          <Typography>reset</Typography>
        </HiddenElement>

        <Typography variant="filterTitle">filters</Typography>

        <Button>
          <Typography variant="sortButton">reset</Typography>
        </Button>
      </StyledDrawerToolbar>
      <MenuList>
        {arrayOfFilters.map((filter) => (
          <MenuItem key={filter.id}>
            <ListItemText>{filter.name}</ListItemText>
            <ListItemIcon>
              <ExpandMoreIcon fontSize="small" />
            </ListItemIcon>
          </MenuItem>
        ))}
      </MenuList>
    </RectangularFrame>
  );
}
