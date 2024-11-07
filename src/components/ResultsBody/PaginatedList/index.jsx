import styles from "./paginatedList.module.css";
import React, { useState, useEffect } from "react";
import { Pagination, Box, Card, Typography } from "@mui/material";
import { useAllVenues } from "./usePaginatedList.js"; // Assuming this hook fetches venues

export const PaginatedList = ({ numberOfCards }) => {
    const itemsPerPage = numberOfCards;
    const [page, setPage] = useState(1);

    // Destructuring venues and isLoading from your custom hook
    const { venues, isLoading } = useAllVenues();

    // Handling undefined or null values (especially on first render)
    if (isLoading) {
        return <Typography>Loading...</Typography>;
    }

    // Calculate pagination indices only if venues is available
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Ensure venues is not undefined and has items
    const displayedItems = venues ? venues.slice(startIndex, endIndex) : [];

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Box className={styles.wrapper}>
            <Box className={styles.cardsWrapper}>
                {displayedItems.length > 0 ? (
                    displayedItems.map((venue, index) => (
                        <Box key={index} className={styles.cardContainer}>
                            <Card className={styles.card}>
                                <Typography variant="body1">{venue.name}</Typography>
                            </Card>
                        </Box>
                    ))
                ) : (
                    <Typography>No venues found</Typography>
                )}
            </Box>

            {/* Pagination */}
            <Pagination
                className={styles.pagination}
                count={Math.ceil(venues.length / itemsPerPage)} // Use venues.length safely
                page={page}
                onChange={handleChange}
                color="primary"
            />
        </Box>
    );
};
