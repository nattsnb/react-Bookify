import styles from "./paginatedList.module.css";
import React, { useState } from "react";
import { Pagination, Box, Card, Typography } from "@mui/material";

const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`); // Example items

export const PaginatedList = () => {
  const itemsPerPage = 9;
  const [page, setPage] = useState(1);

  // Calculate the items to display based on the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = items.slice(startIndex, endIndex);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.cardsWrapper}>
        {displayedItems.map((item, index) => (
          <Box key={index} className={styles.cardContainer}>
            <Card className={styles.card}>
              <Typography variant="body1">{item}</Typography>
            </Card>
          </Box>
        ))}
      </Box>

      <Pagination
        className={styles.pagination}
        count={Math.ceil(items.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
        color="primary"
      />
    </Box>
  );
};
