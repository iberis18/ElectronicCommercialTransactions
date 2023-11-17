import React, { useState } from "react";
import { Input } from '../../input/Input'
import './FilterElement.sass';

export const Okved = () => {
  const [value, valueChange] = useState('');

  const callback = (value) => {
    valueChange(value);
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