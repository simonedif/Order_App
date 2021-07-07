import React, { useReducer } from 'react';

import CartContex from "./cart-contex";

//Deafult State
const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if(action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];

    //ReducerLogic
    let updatedItemsAmount;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItemsAmount = [...state.items];
      updatedItemsAmount[existingCartItemIndex] = updatedItem;
    } else {
      updatedItemsAmount = state.items.concat(action.item);
    }
    
    return {
      items: updatedItemsAmount,
      totalAmount: updateTotalAmount
    };
  };
  return defaultCartState;
};

//Action Will be dispatch from MealItemForm
const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContex = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContex.Provider value={cartContex}>
      {props.children}
    </CartContex.Provider>
  );
};

export default CartProvider;
