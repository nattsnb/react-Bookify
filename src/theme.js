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
    fontSize: 14,
    h1: {
      fontSize: 36,
      fontWeight: 600,
      textAlign: "right",
      marginTop: "133px",
      marginRight: "50px",
    },
    homeLink: {
      fontSize: 35,
      fontWeight: 100,
      textTransform: "uppercase",
    },
    link: {
      fontWeight: 400,
      padding: "50px 80px",
    },
    boldLink: {
      fontWeight: 600,
      color: "#67AA92",
      padding: "0 20px",
    },
    filterTitle: {
      textTransform: "uppercase",
      fontSize: 20,
      fontWeight: 400,
    },
    sortButton: {
      fontWeight: 500,
      color: "#67AA92",
      textTransform: "none",
    },
    landingPageLink: {
      fontWeight: 600,
      color: "#67AA92",
    },
    aboutUsLink: {
      fontWeight: 400,
      color: "#595959",
      WebkitTextStroke: "1px black",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      textShadow: "1px 2px 4px rgba(0, 0, 0, 0.6)",
    },
    boldOnCard: {
      fontWeight: 500,
      color: "#FFFFFF",
    },
    thinOnCard: {
      fontWeight: 300,
      color: "#FFFFFF",
    },
    confirmSearchButton: {
      fontWeight: 500,
      color: "#FFFFFF",
      textTransform: "none",
    },
  },
  spacing: 8,
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          marginTop: "12px",
          width: "100%",
        },
      },
      variants: [
        {
          props: { variant: "light" },
          style: {
            backgroundColor: "#BBBBBB",
          },
        },
        {
          props: { variant: "dark" },
          style: {
            backgroundColor: "#595959",
          },
        },
      ],
    },
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
          marginTop: "35px",
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
          paddingLeft: "20px",
          paddingTop: "20xp",
          paddingBottom: "29px",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        primary: {
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
