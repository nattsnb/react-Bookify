import styles from "./filtersDrawer.module.css";
import {
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
        <Typography>reset</Typography>
        <Typography>filters</Typography>
        <Typography>reset</Typography>
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
