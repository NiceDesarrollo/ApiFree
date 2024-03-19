import useOpenState from "../../../lib/useOpenState";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";


const FoodAndDrink = () => {

  const { open, handleClick } = useOpenState();

  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <FastfoodIcon />
          </ListItemIcon>
          <ListItemText primary="Food and Drink" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Cats */}
            <Link className="link" to={`/CatFacts`}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>🐱</ListItemIcon>
                <ListItemText primary="CATAAS" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default FoodAndDrink;
