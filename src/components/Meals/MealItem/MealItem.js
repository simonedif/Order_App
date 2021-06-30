import React from "react";

import Style from './MealItem.module.css';

import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `£${props.price.toFixed(2)}`

  return (
    <li className={Style.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={Style.description}>{props.description}</div>
        <div className={Style.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
