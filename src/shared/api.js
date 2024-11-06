const getAllVenues = () => {
  return fetch(`http://localhost:8080/http://localhost:3000/venues/`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching venues:", error));
};

const getVenueDetails = (venueId) => {
  return fetch(`http://localhost:3000/venuesDetails/${venueId}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching venue details:", error));
};

export const api = { getAllVenues, getVenueDetails };
