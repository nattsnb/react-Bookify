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
      fontSize: "2.8vw",
      fontWeight: 600,
      textAlign: "right",
    },
    homeLink: {
      fontSize: "2.8vw",
      fontWeight: 100,
      textTransform: "uppercase",
      color: "#000000",
    },
  },
  spacing: 8,
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;
