import styles from "./searchBar.module.css";
import {TextField} from "@mui/material";

export function SearchBar(){

    return (
    <div className={styles.searchBarWrapper}>
        <TextField></TextField>
        <TextField></TextField>
        <TextField></TextField>
        <TextField></TextField>
        <TextField></TextField>
    </div>
    )
}