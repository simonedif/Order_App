//Cart Component
import React, { useContext } from "react";
import Style from './Cart.module.css';

//Modal Component Import
import Modal from '../UI/Modal';
import CartContex from "../../store/cart-contex";
import CartItem from './CartItem';


const Cart = (props) => {
  //Accessing the Contex
  const cartCtx = useContext(CartContex);
  const totalAmount = `£ ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0 ;

  const addItemRemovalHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  };
  
  const removeItemHandler = (id) => {
   cartCtx.removeItem(id);
  };
  
  //To Style the CartItem
  const cartItem = (
    <ul className={Style['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem 
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemRemovalHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={Style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={Style.actions}>
        <button className={Style['button--alt']} onClick={props.onClose} >Close</button>
        {hasItem && <button className={Style.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
