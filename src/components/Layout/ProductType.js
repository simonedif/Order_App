import React from "react";
import Style from "./ProductType.module.css";

const ProductType = (props) => {
  return (
    <div className={Style.maindiv}>
      <div className={Style["btn-group"]}>
        <button>Main</button>
        <button>Dessert</button>
        <button>Side</button>
        <button>Drink</button>
        <button>Extra</button>
        <button>Starter</button>
      </div>
    </div>
  );
};

export default ProductType;
