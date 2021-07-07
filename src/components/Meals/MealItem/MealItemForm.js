import React, { useRef, useState } from "react";

import Style from "./MealItemForm.module.css";
import Input from "../../UI/Input";

//Line 10: input - passing the Date the the re-usable component
const MealItemForm = (props) => {
  //validate if the SubmitHandlerForm is True
  const [state, setSubmitHandler] = useState(true);

  const amoutInputRef = useRef();

  const submitHandlerForm = (event) => {
    event.preventDefault();

    //Read the imput submited
    //.value is Always a string
    const enteredAmount = amoutInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmountNumber < 1 ||
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber > 5
    ) {
      setSubmitHandler(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={Style.form} onSubmit={submitHandlerForm}>
      <Input
        label="Amount"
        ref={amoutInputRef}
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!state && <p>Please Enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
