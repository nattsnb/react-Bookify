import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { PageWidthContainer } from "../styles/pageWidthContainer.js";
import { HorizontalContainerCenter } from "../styles/horizontalContainerCenter.styled.js";

export function NavBar() {
  return (
    <PageWidthContainer>
      <HorizontalContainerCenter>
        <div>
          <Link href={"/"}>
            <Typography variant="homeLink">bookify</Typography>
          </Link>
        </div>
        <HorizontalContainerCenter>
          <Link href={"/"} variant="link">
            <Typography variant="aboutUsLink">about us</Typography>
          </Link>
          <Link href={"/"} variant="link">
            your favourites
          </Link>
          <Link href={"/"} variant="link">
            start hosting
          </Link>
          <Link href={"/"} sx={{ color: "#67AA92" }} variant="boldLink">
            login
          </Link>
        </HorizontalContainerCenter>
      </HorizontalContainerCenter>
    </PageWidthContainer>
  );
}
