import { NavBar } from "../NavBar/index.jsx";
import { Footer } from "../Footer/index.jsx";
import styles from "./layOut.module.css";
import { PageWidthContainer } from "../styles/pageWidthContainer.js";
import { VerticalContainer } from "../styles/verticalContainer.styled.js";

export function Layout({ children }) {
  return (
    <VerticalContainer>
      <NavBar />
      {children}
      <Footer />
    </VerticalContainer>
  );
}
