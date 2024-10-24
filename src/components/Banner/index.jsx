import styles from "./banner.module.css";
import logo from "../../images/logo.png";
import vector from "../../images/vector.png";

export function Banner() {
  return (
    <div className={styles.wrapper}>
      <img src={vector} className={styles.vector} alt={"vector"} />
      <img src={logo} className={styles.logo} alt={"logo"} />
    </div>
  );
}
