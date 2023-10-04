import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummery from "./MealSummery";

function Meals() {
  return (
    <Fragment>
      <MealsSummery />
      <AvailableMeals />
    </Fragment>
  );
}

export default Meals;
