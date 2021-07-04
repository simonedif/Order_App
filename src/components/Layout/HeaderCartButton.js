import React, { useContext } from "react";

//importing The Store Contex
import CartContex from "../../store/cart-contex";

import style from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  
  //Accessing The Store Contex
  const cartCtx = useContext(CartContex);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
