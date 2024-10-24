import { createTheme, ThemeProvider } from "@mui/system";
import { Route, Router, Routes } from "react-router";
import styles from "./app.module.css";
import { Results } from "./pages/Results/index.jsx";
import { Venue } from "./pages/Venue/index.jsx";
import { LayOut } from "./components/LayOut/index.jsx";
import "./poppins.css";
import { white } from "mui/source/styles/colors.js";

const bookifyMuiTheme = createTheme();

bookifyMuiTheme.typography = {};

bookifyMuiTheme.palette = {
  primary: {
    main: "#67AA92",
    contrastText: "#67AA92",
  },
};

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
