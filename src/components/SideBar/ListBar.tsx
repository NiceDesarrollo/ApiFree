import { Divider, Toolbar } from "@mui/material";

import { Link } from "react-router-dom";
import AnimalsList from "./Animals/AnimalsList";
import FoodAndDrink from "./FoodAndDrink/FoodAndDrink";
import "./sideBar.css";

export function ListBar() {
  return (
    <>
      <Link className="link" to={`/`}>
        <Toolbar>Api List</Toolbar>
      </Link>

      <Divider />

      <AnimalsList />

      <FoodAndDrink />
    </>
  );
}
