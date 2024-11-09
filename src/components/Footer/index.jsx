import styles from "./footer.module.css";
import { Divider, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import { SMLinks } from "../SMLinks/index.jsx";
import { PageWidthContainer } from "../styles/pageWidthContainer.js";

const socialMediaLinks = [
  { id: 0, address: "https://www.facebook.com", icon: "fa fa-facebook" },
  { id: 1, address: "https://www.google.com", icon: "fa fa-instagram" },
  { id: 2, address: "https://www.twitter.com", icon: "fa fa-twitter" },
  { id: 3, address: "https://www.gmail.com", icon: "fa fa-envelope" },
];
export function Footer() {
  return (
    <PageWidthContainer>
      <div className={styles.footer}>
        <div className={styles.topLinksBar}>
          <Link href={"/"} variant="link" className={styles.topLink}>
            <Typography variant="link">contact</Typography>
          </Link>
          <Link href={"/"} variant="link" className={styles.topLink}>
            assistance
          </Link>
          <Link href={"/"} variant="link" className={styles.topLink}>
            about us
          </Link>
        </div>
        <Divider variant="dark" />
        <div className={styles.message}>
          <div>Feel free to contact us in case of any problems and doubts.</div>
          <div>We are there for you.</div>
        </div>
        <SMLinks
          links={socialMediaLinks}
          className={styles.bottomLinks}
        ></SMLinks>
      </div>
    </PageWidthContainer>
  );
}
