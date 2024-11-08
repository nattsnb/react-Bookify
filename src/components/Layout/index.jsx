import { NavBar } from "../NavBar/index.jsx";
import { Footer } from "../Footer/index.jsx";
import styles from "./layOut.module.css";

export function Layout({ children }) {
  return (
    <div className="container">
      <div className="layout">
        <NavBar />
        <div className={styles.page}>{children}</div>
        <Footer />
      </div>
    </div>
  );
}
