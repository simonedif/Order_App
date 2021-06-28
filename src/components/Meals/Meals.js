//Component Group MealSummary & AvaiableMeal

import React from 'react';

import AvaiableMeal from "./AvailableMeals";
import MealSummary from './MealSummary';

const Meals = (props) => {
  return (
    <React.Fragment>
      <MealSummary />
      <AvaiableMeal />
    </React.Fragment>
  );
};

export default Meals;
