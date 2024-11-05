import styles from "./sMLinks.module.css";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';


const icons =

export function SMLinks(links) {
  return (
    <div className={styles.sMLinks}>
      {links.map((link) => (
          <Link href={link.address}>
              <Typography variant="homeLink">bookify</Typography>
          </Link>
      ))}
    </div>
  );
}
