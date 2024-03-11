import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";

interface InfoCardProps {
  isLoading: boolean;
  data: Blob | undefined; 
  titleInfoCard: string
}

const InfoCard: React.FC<InfoCardProps> = ({ isLoading, data, titleInfoCard }) => {

  return (
    <>
      {isLoading && (
        <>
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            height={350}
          />
        </>
      )}
      {data && (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={URL.createObjectURL(data)}
              alt={titleInfoCard}
              style={{ maxHeight: "350px", objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                textAlign={"center"}
                gutterBottom
                variant="h5"
                component="div"
              >
                {titleInfoCard}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
}

export default InfoCard;