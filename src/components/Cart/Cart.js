//Cart Component

import React from "react";
import Style from './Cart.module.css';

//Modal Component Import
import Modal from '../UI/Modal';


const Cart = (props) => {

  //To Style the CartItem
  const cartItem = (
    <ul className={Style['cart-items']}>
      {[
        {
          id: "m3",
          name: "Whole chicken",
          description:
            "Flame-grilled, infused with PERi-PERi and served in your choice of spice. Cut into quarters and perfect with sides, its great for sharing!",
          price: 12.99,
        },
      ].map((item) => (
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
