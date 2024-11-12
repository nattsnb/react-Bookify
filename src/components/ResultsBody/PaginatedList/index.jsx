import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { usePaginatedList } from "./usePaginatedList.js";
import { VenueCard } from "./VenueCard/index.jsx";
import {
  CardContainer,
  CardsWrapper,
  ListWrapper,
  StyledPagination,
} from "./PaginatedList.styled.jsx";

export const PaginatedList = ({ numberOfCards }) => {
  const itemsPerPage = numberOfCards;
  const [page, setPage] = useState(1);

  const { venues, isLoading } = usePaginatedList();

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
    <ListWrapper>
      <CardsWrapper>
        {displayedItems.length > 0 ? (
          displayedItems.map((venue, index) => (
            <CardContainer key={index}>
              <VenueCard backgroundurl={venue.coverPhoto} venue={venue} />
            </CardContainer>
          ))
        ) : (
          <Typography>No venues found</Typography>
        )}
      </CardsWrapper>
      <StyledPagination
        count={Math.ceil(venues.length / itemsPerPage)}
        page={page}
        onChange={handleChange}
        color="primary"
      />
    </ListWrapper>
  );
};
