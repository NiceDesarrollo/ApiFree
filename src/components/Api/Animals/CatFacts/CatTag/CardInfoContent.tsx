import { Typography } from "@mui/material";

interface CardContentProps {
  setBlobImageurl: React.Dispatch<React.SetStateAction<Blob | undefined>>;
}


const CardInfoContent: React.FC<CardContentProps> = () => {

  return (
    <>
      <Typography
        textAlign={"center"}
        gutterBottom
        variant="h5"
        component="div"
      >
        Cat tag "pretty"
      </Typography>
      {/* <CardTagSelect setBlobImageurl={setBlobImageurl} /> */}
    </>
  );
};

export default CardInfoContent;
