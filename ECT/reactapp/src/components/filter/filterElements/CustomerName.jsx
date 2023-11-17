import React, { useState } from "react";
import { Input } from '../../input/Input'
import './FilterElement.sass';

export const CustomerName = () => {
  const [value, valueChange] = useState('');

  const callback = (value) => {
    valueChange(value);
  }

  return (
    <>
      <div className='filter'>
        <p className='filter__title'>Наименование заказчика</p>
        <div className='filter__input'>
          <Input placeholder='ООО "Рога и Копыта"' parentCallback={callback} />
        </div>
        <div className='filter__line'/>
      </div>
    </>
  );
};