import styles from "./filtersDrawer.module.css";
import {
  Button,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Toolbar,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";

export function FiltersDrawer() {
  const arrayOfFilters = [
    { id: 0, name: "price range" },
    { id: 1, name: "amenities" },
    { id: 2, name: "room amenities" },
    { id: 3, name: "neighbourhoods" },
    { id: 4, name: "handicap accessibility" },
  ];
  return (
    <div className={styles.wrapper}>
      <Toolbar className={styles.toolbar}>
        <Typography className={styles.hiddenText}>reset</Typography>

        <Typography variant="filterTitle">filters</Typography>

        <Button>
          <Typography variant="sortButton">reset</Typography>
        </Button>
      </Toolbar>
      <Box className={styles.menuListBox}></Box>
      <MenuList className={styles.menuList}>
        {arrayOfFilters.map((filter) => (
          <MenuItem key={filter.id}>
            <ListItemText>{filter.name}</ListItemText>
            <ListItemIcon>
              <ExpandMoreIcon fontSize="small" />
            </ListItemIcon>
          </MenuItem>
        ))}
      </MenuList>
    </div>
  );
}
