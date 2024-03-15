import { Typography } from "@mui/material";
import CardTagSelect from "./CardTagSelect";

interface CardContentProps {
  setBlobImageurl: React.Dispatch<React.SetStateAction<Blob | undefined>>;
}


const CardInfoContent: React.FC<CardContentProps> = ({ setBlobImageurl }) => {

  return (
    <>
      <Typography
        textAlign={"center"}
        gutterBottom
        variant="h5"
        component="div"
      >
        Cat tag
      </Typography>
      {/* <CardTagSelect setBlobImageurl={setBlobImageurl} /> */}
    </>
  );
};

export default CardInfoContent;
