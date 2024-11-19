import { ThemeProvider } from "@mui/system";
import { Route, Router, Routes } from "react-router";
import styles from "./app.module.css";
import { Results } from "./pages/Results/index.jsx";
import { Venue } from "./pages/Venue/index.jsx";
import { Layout } from "./components/Layout/index.jsx";
import "./poppins.css";
import theme from "./theme";
import { CssBaseline } from "@mui/material";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/results/" element={<Results />} exact />
          <Route path="/venue/" element={<Venue />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}
