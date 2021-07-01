import React from 'react';

import Style from './MealItemForm.module.css';
import Input from '../../UI/Input';

//Line 10: input - passing the Date the the re-usable component
const MealItemForm = (props) => {
  return (
    <form className={Style.form}>
      <Input label="Amount" input={{
        id: 'amount' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }} />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;