import React, { useState } from "react";
import Style from "./ProductType.module.css";

const ProductType = ({ filter, button }) => {
  const [isValid, setIsValid ] = useState(false);
  
  return (
    <div className={Style.maindiv}>
      <div className={`${Style["btn-group"]} ${isValid ? Style["btn-group.clicked"] : ''}`}>
       {
         button.map((type) => {
          return <button onClick={() => filter(type)}>{type}</button>
         })
       }
      </div>
    </div>
  );
};

// const ProductType = ({ filter }) => {
//   return (
//     <div className={Style.maindiv}>
//       <div className={Style["btn-group"]}>
//         <button onClick={() => filter('main')}>Main</button>
//         <button onClick={() => filter('dessert')}>Dessert</button>
//         <button onClick={() => filter('side')}>Side</button>
//         <button onClick={() => filter('drink')}>Drink</button>
//         <button onClick={() => filter('extra')}>Extra</button>
//         <button onClick={() => filter('starter')}>Starter</button>
//       </div>
//     </div>
//   );
// };

export default ProductType;
