import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const CatsLink = () => {
  return (
    <>
      <Link className="link" to={`/CatFacts`}>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>🐱</ListItemIcon>
          <ListItemText primary="CATAAS" />
        </ListItemButton>
      </Link>
    </>
  );
};

export default CatsLink;
