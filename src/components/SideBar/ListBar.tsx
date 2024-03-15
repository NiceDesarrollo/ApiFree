import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";

export function ListBar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Link className="link" to={`/`}>
        <Toolbar>Api List</Toolbar>
      </Link>

      <Divider />
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <PetsIcon />
          </ListItemIcon>
          <ListItemText primary="Animals" />
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
            {/* Dogs */}
            <Link className="link" to={`/Dogs`}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>🐕</ListItemIcon>
                <ListItemText primary="Dogs" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
      </List>
    </>
  );
}
