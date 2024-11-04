import styles from "./navBar.module.css";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

export function NavBar() {
  return (
    <div className={styles.navBar}>
      <div>
        <Link href={"/"}>
          <Typography variant="homeLink">bookify</Typography>
        </Link>
      </div>
      <div className={styles.linksList}>
        <Link href={"/"} variant="link">
          <Typography variant="aboutUsLink">about us</Typography>
        </Link>
        <Link href={"/"} variant="link">
          your favourites
        </Link>
        <Link href={"/"} variant="link">
          start hosting
        </Link>
        <Link href={"/"} sx={{ color: "#67AA92" }} variant="boldLink">
          login
        </Link>
      </div>
    </div>
  );
}
