import React, { useState } from "react";
import { Input } from '../../input/Input'
import './FilterElement.sass';
import { FILTERS_ID } from "../../../const";

export const CustomerName = (props) => {
  const [value, valueChange] = useState('');
  const parentCallback = props.parentCallback;
  const id = FILTERS_ID.CUSTOMER_NAME;

  const callback = (value) => {
    valueChange(value);
    parentCallback(value, id);
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