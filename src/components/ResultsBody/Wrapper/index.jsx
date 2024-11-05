import styles from "./wrapper.module.css";
import { Icon, Link } from "@mui/material";

export function Wrapper({ arrayOfSMLinks }) {
  const arrayOfIcons = [];

  return <div className={styles.wrapper}>
    <div className={styles.toolbar}></div>
    <div className={styles.cardsWrapper}></div>
    <div className={styles.pagination}>
      <div className={styles.container}></div>
    </div>
  </div>;
}
