import styles from "./footer.module.css";
import { Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import { SMLinks } from "../SMLinks/index.jsx";

const socialMediaLinks = [
  { id: 0, address: "www.facebook.com", icon: "" },
  { id: 1, address: "www.google.com" },
  { id: 2, address: "www.twitter.com" },
  { id: 3, address: "www.facebook.com" },
];
export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.topLinks}>
        <Link href={"/"} variant="link">
          <Typography variant="link">contact</Typography>
        </Link>
        <Link href={"/"} variant="link">
          assistance
        </Link>
        <Link href={"/"} variant="link">
          about us
        </Link>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.message}></div>
      <SMLinks
        links={socialMediaLinks}
        className={styles.bottomLinks}
      ></SMLinks>
    </div>
  );
}
