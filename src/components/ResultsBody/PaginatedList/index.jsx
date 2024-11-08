import styles from "./paginatedList.module.css";
import React, { useState, useEffect } from "react";
import { Pagination, Box, Card, Typography } from "@mui/material";
import { useAllVenues } from "./usePaginatedList.js";
import { VenueCard } from "./VenueCard/index.jsx";

export const PaginatedList = ({ numberOfCards }) => {
  const itemsPerPage = numberOfCards;
  const [page, setPage] = useState(1);

  const { venues, isLoading } = useAllVenues();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

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
              <VenueCard
                backgroundUrl={venue.coverPhoto}
                venue={venue}
                className={styles.card}
              />
            </Box>
          ))
        ) : (
          <Typography>No venues found</Typography>
        )}
      </Box>
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
