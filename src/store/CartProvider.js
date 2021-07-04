import CartContex from "./cart-contex";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};

  const cartContex = {
    items: [],
    totalAmount: 0,
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
