//Dammmy Data for Avaiable Items

import React from "react";
import style from "./AvaiableMeal.module.css";

//Wap the Avaiable Items with Card component
import Card from "../UI/Card";
import MealItem from "../Meals/MealItem/MealItem";
import DATA from './MealItem/avaliable_products';
import ProductType from '../Layout/ProductType';

const DUMMY_MEALS = DATA;

//Passing Data to The MealComponent
const AvaiableMeal = (props) => {
  const mealsList = DUMMY_MEALS.filter(item => item.type === "main").map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.title}
      description={meal.description}
      price={parseFloat(meal.price)}
    />
  ));

  return (
    <section className={style.meals}>
      <Card>
        <ProductType />
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvaiableMeal;
