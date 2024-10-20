import {createTheme, ThemeProvider} from "@mui/system";
import {Route, Router, Routes} from "react-router";
import styles from "./app.module.css";

const bookifyMuiTheme = createTheme({
    palette: {
        primary: {
            main: "#67AA92",
            contrastText: "#FFFFFF"
        }
    }
})
 

function App() {

    return (
        <ThemeProvider theme={bookifyMuiTheme}>
            <div className={styles.header}>
                PLACEHOLDER HEADER
            </div>
            <Routes>
                <Route path="/" elelemnt={{
                }}/>
                <Route
                    path="/..."
                    element={
                    }
                />
            </Routes>
            <div className={styles.footer}>
                PLACEHOLDER FOOTER
            </div>
        </ThemeProvider>
    )
}
