import { createTheme } from "@mui/material/styles";
import { palette } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "#67AA92",
    },
    secondary: {
      main: "#595959",
      light: "#BBBBBB",
    },
    background: {
      default: "#FFFFFF",
      gray: "#FDFDFD",
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
    },
    link: {
      fontSize: "1.2vw",
      fontWeight: 400,
    },
    boldLink: {
      fontSize: "1.2vw",
      fontWeight: 600,
    },
    filterTitle: {
      textTransform: "uppercase",
      fontSize: "1.6vw",
      fontWeight: 400,
    },
    sortButton: {
      fontSize: "1.4vw",
      fontWeight: 500,
      color: "#67AA92",
      textTransform: "none",
    },
    aboutUsLink: {
      fontWeight: 400,
      color: "#595959",
      WebkitTextStroke: "1px black",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      textShadow: "1px 2px 4px rgba(0, 0, 0, 0.6)",
    },
    confirmSearchButton: {
      fontSize: "1.2vw",
      fontWeight: 500,
      color: "#FFFFFF",
      textTransform: "none",
    },
  },
  spacing: 8,
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "#000000",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: "20px",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: "1.2vw",
          paddingLeft: "1.3vw",
          paddingTop: "1.2vw",
          paddingBottom: "1.2vw",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        primary: {
          fontSize: "8vw",
          color: "#818181",
        },
      },
    },
  },
});

document.documentElement.style.setProperty(
  "--primary-main",
  theme.palette.primary.main,
);
document.documentElement.style.setProperty(
  "--secondary-main",
  theme.palette.secondary.main,
);
document.documentElement.style.setProperty(
  "--secondary-light",
  theme.palette.secondary.light,
);
document.documentElement.style.setProperty(
  "--background-gray",
  theme.palette.background.gray,
);
document.documentElement.style.setProperty(
  "--background-default",
  theme.palette.background.default,
);

export default theme;
