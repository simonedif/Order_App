import React from 'react';

import style from  './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}>
      <CartIcon />
      </span>
      <span>
        Your cart
      </span>
      <span className={style.badge}>
        3
      </span>
    </button>
  );
};

export default HeaderCartButton;