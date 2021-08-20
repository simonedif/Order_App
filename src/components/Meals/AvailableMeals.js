//Dammmy Data for Avaiable Items

import React, { useState, useEffect } from "react";
import style from "./AvaiableMeal.module.css";

//Wap the Avaiable Items with Card component
import Card from "../UI/Card";
import MealItem from "../Meals/MealItem/MealItem";
//import DATA from './MealItem/avaliable_products';
import ProductType from '../Layout/ProductType';


//Passing Data to The MealComponent
const AvaiableMeal = (props) => {

  //Fetch Function
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    
    const fetchMeals = async () => {

      const response = await fetch('https://order-app-2cddf-default-rtdb.europe-west1.firebasedatabase.app/menu.json');
      const responseData = await response.json()
      setFetchData(responseData);
    }
    
    fetchMeals();
  }, []);

//Button have all the Items - Remove Filter button
  const allProducts = ['All', ...new Set(fetchData.map(item => item.type))];
  console.log(allProducts);


  const [menu, setMenu] = useState(fetchData)
  const [activeButton, setActiveButton] = useState('All')

  useEffect(() => {
    setMenu(fetchData);
  }, [fetchData]);

  const filter = (button) => {

    //Set Button All
    if (button === 'All') {
      setMenu(fetchData);
      setActiveButton('All');
      return
    };
    const filterData = fetchData.filter(item => item.type === button);
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
