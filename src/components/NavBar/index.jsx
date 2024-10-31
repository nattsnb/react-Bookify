import styles from "./navBar.module.css";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

export function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.homeLinkContainer}>
        <Link href={"/"}>
          <Typography className={styles.homeLinkTypo} variant="homeLink">
            bookify
          </Typography>
        </Link>
      </div>
      <div className={styles.linksList}>links</div>
    </div>
  );
}
