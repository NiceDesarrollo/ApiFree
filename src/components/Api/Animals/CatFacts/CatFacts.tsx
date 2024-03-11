import { Box, Grid } from "@mui/material";
import { useQuery } from "react-query";
import { fetchCatGif, fetchCatImage } from "../../../../lib/fetchs";
import InfoCard from "../../../Cards/InfoCard";

export function CatFacts() {
  //*Random image
  const { isLoading: isLoadingRandomImage, data: dataRandomImage } = useQuery(
    "catImage",
    fetchCatImage
  );

  //*Random gif
  const { isLoading: isLoadingRandomGif, data: dataRandomGif } = useQuery(
    "fetchCatGif",
    fetchCatGif
  );

  return (
    <Box>
      <Grid  container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <InfoCard
            isLoading={isLoadingRandomImage}
            data={dataRandomImage}
            titleInfoCard="Random Cat Image"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} marginTop={2}>
          <InfoCard
            isLoading={isLoadingRandomGif}
            data={dataRandomGif}
            titleInfoCard="Random Cat Gif"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
