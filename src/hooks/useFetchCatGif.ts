import { useQuery } from "react-query";
import { fetchCatGif } from "../lib/fetchs";

export const usefetchCatGif = () => {
  return useQuery(
    `fetchCatGif`, 
    () => fetchCatGif(),
    {
      onError: (error) => console.error("Error fetching cat gif:", error),
    }
  );
};