import React, { useState } from "react";
import './Input.sass'

export const Input = (props) => {
  const placeholder = props.placeholder || '';
  const parentCallback = props.parentCallback;
  const type = props.type || 'text';
  const [value, valueChange] = useState('');
  
  const inputHandler = (value) => {
    valueChange(value);
    parentCallback(value);
  }

  return (
    <>
      <input  
        className='input-field'
        type={type}
        value={value}
        onChange={e => inputHandler(e.target.value)}
        placeholder={placeholder}
      />
    </>
  );
};