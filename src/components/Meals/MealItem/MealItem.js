import React, { useContext } from "react";

import Style from './MealItem.module.css';

import MealItemForm from "./MealItemForm";

import CartContext from '../../../store/cart-contex';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `£${props.price.toFixed(2)}`

  //passing item to addcarthandler
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={Style.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={Style.description}>{props.description}</div>
        <div className={Style.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
