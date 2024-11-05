import styles from "./resultsLinks.module.css";
import { Icon, Link } from "@mui/material";

export function ResultLinks({ arrayOfSMLinks }) {
  const arrayOfIcons = [];

  return (
    <div className={styles.wrapper}>{arrayOfSMLinks.map((link) => {})}</div>
  );
}
