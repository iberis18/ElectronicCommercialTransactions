import React, { useState } from "react";
import './Checkbox.sass'

export const Checkbox = (props) => {
  const label = props.label || '';
  const parentCallback = props.parentCallback;
  const elementKey = props.elementKey;
  const [checked, setChecked] = useState(false);
  
  const checkboxHandler = (value) => {
    setChecked(value);
    parentCallback(value, elementKey);
  }

  return (
    <>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={() => checkboxHandler(!checked)} 
      />
      <span className='checkbox__label'>{label}</span>
   </>
  );
};