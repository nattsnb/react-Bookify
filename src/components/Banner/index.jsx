import styles from "./banner.module.css";
import logo from "../../images/logo.png";
import vector from "../../images/vector.png";
import Typography from "@mui/material/Typography";

export function Banner() {
  return (
    <div className={styles.wrapper}>
      <Typography variant="h1">
        Find your place and experience it together.
      </Typography>
      <img src={vector} className={styles.vector} alt={"vector"} />
      <img src={logo} className={styles.logo} alt={"logo"} />
    </div>
  );
}
