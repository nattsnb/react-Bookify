import styles from "./searchButton.module.css";
import {Button, Link} from "@mui/material";

export function SearchButton() {
    return (
        <div className={styles.searchButtonWrapper}>
            <Link href={"/"}>
                <Button className={styles.button} variant="contained">
                    Search for venue
                </Button>
            </Link>
        </div>
    );
}
