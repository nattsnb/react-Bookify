import styles from "./banner.module.css";
import logoImage from "../../images/logo.png";
import vectorImage from "../../images/vector.png";
import Typography from "@mui/material/Typography";
import {SearchBar} from "../SearchBar/index.jsx";

export function Banner({ size }) {
  let bannerHeight = 0;
  if (size === "s") {
    bannerHeight = "20.83vw";
  } else if (size === "m") {
    bannerHeight = "36.38vw";
  } else if (size === "l") {
    bannerHeight = "52.15vw";
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.wrapper}
        style={{ "--banner-height": bannerHeight }}
      >
        <img src={vectorImage} className={styles.vector} alt={"vectorImage"} />
        <div>
          <img src={logoImage} className={styles.logo} alt={"logoImage"} />
        </div>
        <Typography className={styles.welcomeMessage} variant="h1">
          Find your place and experience it together.
        </Typography>
        <SearchBar className={styles.searchBar}></SearchBar>
      </div>
    </div>
  );
}
