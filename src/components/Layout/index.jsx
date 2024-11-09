import { NavBar } from "../NavBar/index.jsx";
import { Footer } from "../Footer/index.jsx";
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
