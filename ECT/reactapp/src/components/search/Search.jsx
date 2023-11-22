import React, { useState } from "react";
import './Search.sass'
import CrossIcon from './../../assets/cross.svg?react';
import SearchIcon from './../../assets/search.svg?react';

export default function Search (props) {
  const page = props.page || '';
  const parentCallback = props.parentCallback;

  const [value, valueChange] = useState('');
  
  const callback = () => {
    valueChange(value);
    parentCallback(value);
  }

    return (
      <>
        <div className='search-field'>
          <input  
            className='search-field__label'
            type='text'
            value={value}
            onChange={e => valueChange(e.target.value)}
            placeholder='Введите полностью или часть номера, наименования закупки, идентификационного кода закупки (ИКЗ), наименования или ИНН Заказчика'
          />
          <div className={value? 'visible' : 'hidden'}>
            <button onClick={() => valueChange('')} className='search-field__btn'>
              <CrossIcon className='search-field__btn__icon' />
            </button>
          </div>
          <button onClick={callback} className='search-field__btn'>
            <SearchIcon className='search-field__btn__icon' />
          </button>
        </div>
        </>
    );
  };