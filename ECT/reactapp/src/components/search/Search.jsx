import React, { useState } from "react";
import './Search.sass'
import CrossIcon from './../../assets/cross.svg?react';
import SearchIcon from './../../assets/search.svg?react';
import { getAllPurchases } from '../../api/domains/purchasesApi';

export default function Search (props) {
  const page = props.page || '';
  const setSearchResult = props.setSearchResult; 

  const [value, valueChange] = useState('');
  
  const submit = async () => {
    const data = await getAllPurchases(page, value);
    setSearchResult(data.response);
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
          <button onClick={submit} className='search-field__btn'>
            <SearchIcon className='search-field__btn__icon' />
          </button>
        </div>
        </>
    );
  };