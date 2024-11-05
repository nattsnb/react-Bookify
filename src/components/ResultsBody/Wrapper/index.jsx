import styles from "./wrapper.module.css";
import { Icon, Link } from "@mui/material";
import { PaginatedList } from "../PaginatedList/index.jsx";

export function Wrapper({ arrayOfSMLinks }) {
  const arrayOfIcons = [];

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}></div>
      <div className={styles.cardsWrapper}>
        <PaginatedList></PaginatedList>
      </div>
    </div>
  );
}
