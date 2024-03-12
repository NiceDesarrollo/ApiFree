import { useQuery } from "react-query";
import { fetchCatImage } from "../lib/fetchs";

export const useFetchCatImage = () => {
  return useQuery(
    `fetchCatImage`, 
    () => fetchCatImage(),
    {
      onError: (error) => console.error("Error fetching cat gif:", error),
    }
  );
};