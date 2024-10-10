import {createTheme, ThemeProvider} from "@mui/system";
import {Route, Router, Routes} from "react-router";

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
            <Routes>
                <Route path="/venues/" element={}>

                </Route>
            </Routes>
        </ThemeProvider>
    )
}