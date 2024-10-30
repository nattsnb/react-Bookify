import { ThemeProvider } from "@mui/system";
import { Route, Router, Routes } from "react-router";
import styles from "./app.module.css";
import { Results } from "./pages/Results/index.jsx";
import { Venue } from "./pages/Venue/index.jsx";
import { LayOut } from "./components/LayOut/index.jsx";
import "./poppins.css";
import theme from "./theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <LayOut>
        <Routes>
          <Route path="/results/" element={<Results />} exact />
          <Route path="/venue/" element={<Venue />} />
        </Routes>
      </LayOut>
    </ThemeProvider>
  );
}
