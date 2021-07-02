import React, { useState } from 'react';

import Style from './Input.module.css'

//For Input used {..props to be able to re-use the componet}

const Input = (props) => {
  return (
    <div className={Style.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;