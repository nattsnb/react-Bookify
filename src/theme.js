import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#67AA92",
    },
    secondary: {
      main: "#595959",
    },
    background: {
      default: "#FDFDFD",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      textAlign: "right",
    },
    body1: {
      fontSize: "1rem",
    },
  },
  spacing: 8, // baza odstępów, np. padding/margin
});

export default theme;
