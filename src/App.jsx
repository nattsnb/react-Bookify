import { createTheme, ThemeProvider } from "@mui/system";
import { Route, Router, Routes } from "react-router";
import styles from "./app.module.css";
import { Search } from "./Search/index.jsx";
import { Venue } from "./Venue/index.jsx";

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
      <div className={styles.header}>PLACEHOLDER HEADER</div>
      <Routes>
        <Route path="/search/" element={<Search />} exact />
        <Route path="/venue/" element={<Venue />} />
      </Routes>
      <div className={styles.footer}>PLACEHOLDER FOOTER</div>
    </ThemeProvider>
  );
}
