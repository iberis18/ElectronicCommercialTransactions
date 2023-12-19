import React, { useState } from "react";
import { Input } from '../../input/Input'
import './FilterElement.sass';
import { FILTERS_ID } from "../../../const";

export const Region = (props) => {
  const [value, valueChange] = useState('');
  const parentCallback = props.parentCallback;
  const id = FILTERS_ID.REGION;

  const callback = (value) => {
    valueChange(value);
    parentCallback(value, id);
  }

  //todo dropdown and live search 
  return (
    <>
      <div className='filter'>
        <p className='filter__title'>Регион</p>
        <div className='filter__input'>
          <Input placeholder='Москва' parentCallback={callback} />
        </div>
        <div className='filter__line'/>
      </div>
    </>
  );
};