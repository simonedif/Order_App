import React, { useState } from 'react';

import Style from './Input.module.css'

//For Input used {..props to be able to re-use the componet}
//forwardref used to to input custom component

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={Style.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;