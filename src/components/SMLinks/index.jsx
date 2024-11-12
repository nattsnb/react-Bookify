import { Link } from "@mui/material";
import { StyledSMLinks } from "./SMLinks.styled.jsx";
import { HorizontalContainerCenter } from "../../shared/styledComponents/horizontalContainerCenter.styled.js";

export function SMLinks({ links }) {
  return (
    <HorizontalContainerCenter>
      {links.map((link) => (
        <Link href={link.address} key={link.id}>
          <StyledSMLinks className={link.icon}></StyledSMLinks>
        </Link>
      ))}
    </HorizontalContainerCenter>
  );
}
