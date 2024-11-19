import { NavBar } from "../NavBar/index.jsx";
import { Footer } from "../Footer/index.jsx";
import { VerticalContainer } from "../../shared/styledComponents/verticalContainer.styled.js";

export function Layout({ children }) {
  return (
    <VerticalContainer>
      <NavBar />
      {children}
      <Footer />
    </VerticalContainer>
  );
}
