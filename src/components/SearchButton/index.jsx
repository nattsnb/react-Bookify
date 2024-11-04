import styles from "./searchButton.module.css";
import {Button, Link} from "@mui/material";
import Typography from "@mui/material/Typography";

export function SearchButton() {
    return (
        <div className={styles.searchButtonWrapper}>
            <Link href={"/"}>
                <Button className={styles.button} variant="contained">
                    <Typography variant="confirmSearchButton">
                        Search for venue
                    </Typography>
                </Button>
            </Link>
        </div>
    );
}
