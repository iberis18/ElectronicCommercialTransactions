import React, { useState } from "react";
import { Input } from '../../input/Input'
import './FilterElement.sass';

export const Region = () => {
  const [value, valueChange] = useState('');

  const callback = (value) => {
    valueChange(value);
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