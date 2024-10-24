import { createTheme, ThemeProvider } from "@mui/system";
import { Route, Router, Routes } from "react-router";
import styles from "./app.module.css";
import { Results } from "./pages/Results/index.jsx";
import { Venue } from "./pages/Venue/index.jsx";
import { NavBar } from "./components/NavBar/index.jsx";
import { Footer } from "./components/Footer/index.jsx";
import { LayOut } from "./components/LayOut/index.jsx";

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
