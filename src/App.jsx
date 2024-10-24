import { createTheme, ThemeProvider } from "@mui/system";
import { Route, Router, Routes } from "react-router";
import styles from "./app.module.css";
import { Results } from "./Results/index.jsx";
import { Venue } from "./Venue/index.jsx";
import { NavBar } from "./NavBar/index.jsx";
import { Footer } from "./Footer/index.jsx";
import { LayOut } from "./LayOut/index.jsx";

const bookifyMuiTheme = createTheme({
  palette: {
    primary: {
      main: "#67AA92",
      contrastText: "#FFFFFF",
    },
  },
});

export function App() {
  return (
    <ThemeProvider theme={bookifyMuiTheme}>
      <LayOut>
        <Routes>
          <Route path="/results/" element={<Results />} exact />
          <Route path="/venue/" element={<Venue />} />
        </Routes>
      </LayOut>
    </ThemeProvider>
  );
}
