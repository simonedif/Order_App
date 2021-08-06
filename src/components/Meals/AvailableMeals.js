//Dammmy Data for Avaiable Items

import React, { useState } from "react";
import style from "./AvaiableMeal.module.css";

//Wap the Avaiable Items with Card component
import Card from "../UI/Card";
import MealItem from "../Meals/MealItem/MealItem";
import DATA from './MealItem/avaliable_products';
import ProductType from '../Layout/ProductType';


//Button have all the Items - Remove Filter button
const allProducts = ['All', ...new Set(DATA.map(item => item.type))];
console.log(allProducts);

//Passing Data to The MealComponent
const AvaiableMeal = (props) => {
  const [menu, setMenu] = useState(DATA)
  const [activeButton, setActiveButton] = useState('All')

  
  const filter = (button) => {

    //Set Button All
    if (button === 'All') {
      setMenu(DATA);
      setActiveButton('All');
      return
    };
    const filterData = DATA.filter(item => item.type === button);
    setMenu(filterData)
    setActiveButton(button)
  }
  
  const mealsList = menu.map((meal) => (
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
        <ProductType activeButton={activeButton} button={allProducts} filter={filter}  />
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvaiableMeal;
