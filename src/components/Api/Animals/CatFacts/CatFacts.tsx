import { Box, Grid } from "@mui/material";
import RandomCatImage from "./RandomCatImage/RandomCatImage";
import RandomCatGif from "./RandomCatGift/RandomCatGif";
import CatTag from "./CatTag/CatTag";

export function CatFacts() {

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          {/* <h1>Hello</h1> */}
          <RandomCatImage/>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          {/* <h1>Hello</h1> */}
          <RandomCatGif/>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CatTag/>
        </Grid>
      </Grid>
    </Box>
  );
}
