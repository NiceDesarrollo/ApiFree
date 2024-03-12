import { useQuery } from "react-query";
import { fetchTagCat } from "../lib/fetchs";

export const useFetchTagCat = (tag:string) => {
  return useQuery(
    `fetchTagCatImage-${tag}`, 
    () => fetchTagCat(tag),
    {
      onError: (error) => console.error("Error fetching cat image:", error),
    }
  );
};