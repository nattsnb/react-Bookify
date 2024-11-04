import styles from "./filtersDrawer.module.css";
import {
  Cloud,
  ContentCopy,
  ContentCut,
  ContentPaste,
} from "@mui/icons-material";
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Toolbar,
} from "@mui/material";
import Typography from "@mui/material/Typography";

export function FiltersDrawer() {
  return (
    <div className={styles.wrapper}>
      <MenuList>
        <Toolbar className={styles.toolbar}>
          <Typography>reset</Typography>
          <Typography>filters</Typography>
          <Typography>reset</Typography>
        </Toolbar>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Paste</ListItemText>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            ⌘V
          </Typography>
        </MenuItem>
      </MenuList>
    </div>
  );
}
