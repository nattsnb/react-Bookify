import styles from "./landingPageLink.module.css";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

export function LandingPageLink() {
  return (
    <div className={styles.landingPageLinkWrapper}>
      <Link href={"/"}>
        <Typography variant="landingPageLink">
          I don't want to be that specific
        </Typography>
      </Link>
    </div>
  );
}
