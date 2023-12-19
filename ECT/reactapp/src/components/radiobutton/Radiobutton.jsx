import React, { useState } from "react";
import './Radiobutton.sass'

export const Radiobutton = (props) => {
  const groupName = props.groupName || '';
  const parentCallback = props.parentCallback;
  const [list, changeList] = useState(props.list || []);
  
  const radiobuttonHandler = (value) => {
    let result = list.map(item => {
      return {
        ...item, 
        checked: false,
    }});
    result.find(item => item.value == value).checked = true;   
    changeList(result);
    parentCallback(result);

    // changeList(list.map(item => {
    //   let returnValue = {...item};
    
    //   if (item.value == value)
    //     returnValue.checked = true;
    //   else 
    //     returnValue.checked = false;
    
    //   return returnValue;
    // }));
  }

  return (
    <>
      <div className='radiobuttons'>
        {
          list.map((item) => 
          <div className='radiobuttons__item' key={item.value}>
            <input
              className='radiobuttons__item__input'
              name={groupName}
              type='radio'
              checked={item.checked}
              id={item.value}
              onChange={() => radiobuttonHandler(item.value)}
            />
            <label className='radiobuttons__item__label' htmlFor={item.value}>{item.name}</label>
          </div>
          )
        }
      </div>
   </>
  );
};