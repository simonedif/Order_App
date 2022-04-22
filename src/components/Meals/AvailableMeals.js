import React, { useState, useEffect } from "react";
import style from "./AvaiableMeal.module.css";

//Wap the Avaiable Items with Card component
import Card from "../UI/Card";
import MealItem from "../Meals/MealItem/MealItem";
import ProductType from "../Layout/ProductType";
import StyleLoader from "../UI/loader.module.css";

//Passing Data to The MealComponent
const AvaiableMeal = (props) => {
  
  //State Dealing With Fetch
  const [fetchData, setFetchData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://console.firebase.google.com/project/order-app-2cddf/database/order-app-2cddf-default-rtdb/data/~2F/menu"
      );
      console.log(response);

      if (!response.ok) {
        throw new Error("Error");
      }

      const responseData = await response.json();

      setFetchData(responseData);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  useEffect(() => {
    setMenu(fetchData);
  }, [fetchData]);

  //Button have all the Items - Remove Filter button
  const allProducts = ["All", ...new Set(fetchData.map((item) => item.type))];
  console.log(allProducts);

  const [menu, setMenu] = useState(fetchData);
  const [activeButton, setActiveButton] = useState("All");

  const filter = (button) => {
    //Set Button All
    if (button === "All") {
      setMenu(fetchData);
      setActiveButton("All");
      return;
    }
    const filterData = fetchData.filter((item) => item.type === button);
    setMenu(filterData);
    setActiveButton(button);
  };

  if (isloading) {
    return <section className={StyleLoader.loader}></section>;
  }

  if (httpError) {
    return (
      <div className={StyleLoader.loadingText}>
        <p>{httpError}</p>
      </div>
    );
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
        <ProductType
          activeButton={activeButton}
          button={allProducts}
          filter={filter}
        />
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvaiableMeal;
