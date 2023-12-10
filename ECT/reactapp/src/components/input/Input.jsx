import React, { useState } from "react";
import './Input.sass'

export const Input = (props) => {
  const placeholder = props.placeholder || '';
  const parentCallback = props.parentCallback;
  const type = props.type || 'text';
  const elementKey = props.elementKey || '';
  const [value, valueChange] = useState(props.value || '');
  
  const inputHandler = (value) => {
    valueChange(value);
    parentCallback(value, elementKey);
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