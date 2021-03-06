import React from "react";
import Style from "./ProductType.module.css";

const ProductType = ({ filter, button, activeButton }) => {
  

  return (
    <div className={Style.maindiv}>
      <div className={`${Style["btn-group"]}`}>
       {
         button.map((type) => {
          return <button style={{backgroundColor:activeButton === type && '#b87a60'}} onClick={() => filter(type)}>{type}</button>
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
