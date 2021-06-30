import React from 'react';

import Style from './Input.module.css'

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.input.id} className={Style.input}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;