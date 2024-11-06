import { useEffect, useState } from "react";
import { api } from "../../../shared/api.js";

export const useAllVenues = () => {
  const [venues, setVenues] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAllVenues() {
      setIsLoading(true);
      try {
        const venuesResponse = await api.getAllVenues();
        setVenues(venuesResponse);
      } catch (error) {}
      setIsLoading(false);
    }
    getAllVenues();
  }, []);

  return { venues, isLoading };
};
