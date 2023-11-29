import React, { useState, useEffect } from "react";
import './Radiobutton.sass'

export const Radiobutton = (props) => {
  const [list, changeList] = useState(props.list || []);
  const parentCallback = props.parentCallback;
  
  const radiobuttonHandler = (value) => {
    let tmp = list.map(item => {
      return {
        ...item, 
        checked: false,
    }});
    tmp.find(item => item.value == value).checked = true;   
    changeList(tmp);

    // changeList(list.map(item => {
    //   let returnValue = {...item};
    
    //   if (item.value == value)
    //     returnValue.checked = true;
    //   else 
    //     returnValue.checked = false;
    
    //   return returnValue;
    // }));
  }
  
  // useEffect(() => {
  //   console.log(list);
  // }, [list])

  return (
    <>
      <div className='radiobuttons'>
        {
          list.map((item) => 
          <div className='radiobuttons__item' key={item.value}>
            <input
              className='radiobuttons__item__input'
              type="radio"
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