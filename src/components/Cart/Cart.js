//Cart Component
import React, { useContext } from "react";
import Style from './Cart.module.css';

//Modal Component Import
import Modal from '../UI/Modal';
import CartContex from "../../store/cart-contex";

const Cart = (props) => {
  //Accessing the Contex
  const cartCtx = useContext(CartContex);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  
  //To Style the CartItem
  const cartItem = (
    <ul className={Style['cart-items']}>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={Style.total}>
        <span>Total Amount</span>
        <span>£ 10.50</span>
      </div>
      <div className={Style.actions}>
        <button className={Style['button--alt']} onClick={props.onClose} >Close</button>
        <button className={Style.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
