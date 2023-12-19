import React, { useState } from "react";
import { Input } from '../../input/Input'
import './FilterElement.sass';
import { FILTERS_ID } from "../../../const";

export const Okved = (props) => {
  const [value, valueChange] = useState('');
  const parentCallback = props.parentCallback;
  const id = FILTERS_ID.OKVED;

  const callback = (value) => {
    valueChange(value);
    parentCallback(value, id);
  }

  //todo dropdown 
  return (
    <>
      <div className='filter'>
        <p className='filter__title'>ОКВЭД</p>
        <div className='filter__input'>
          <Input placeholder='13.10.01' parentCallback={callback} />
        </div>
        <div className='filter__line'/>
      </div>
    </>
  );
};