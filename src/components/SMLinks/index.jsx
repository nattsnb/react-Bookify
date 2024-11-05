import styles from "./sMLinks.module.css";
import { Link } from "@mui/material";

export function SMLinks({ links }) {
  return (
    <div className={styles.sMLinks}>
      {links.map((link) => (
        <Link href={link.address} key={link.id}>
          <i className={link.icon}></i>
        </Link>
      ))}
    </div>
  );
}
