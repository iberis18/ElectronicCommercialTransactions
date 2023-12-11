import React, { useEffect, useState } from 'react';
import './Documents.sass';
import AddIcon from '../../assets/add.svg?react';
import CrossIcon from '../../assets/cross.svg?react';

export const Documents = () => {
  const [documents, documentsChange] = useState([]);

  return (
    <div className='documents'>
      <div className='documents__header'>
        <p className='documents__header__title'>Документы</p>
        <button onClick={() => deliteItem(index)} className='documents__header__add-btn'>
          <AddIcon className='documents__header__add-btn__icon' />
        </button>
      </div>
      <div className='documents__item'>
        <a className='documents__item__name' href=''>Описание объекта закупки.docx</a>
        <button onClick={() => deliteItem(index)} className='documents__item__cross-btn'>
          <CrossIcon className='documents__item__cross-btn__icon' />
        </button>
      </div>
      <div className='documents__item'>
        <a className='documents__item__name' href=''>ТЗ.docx</a>
        <button onClick={() => deliteItem(index)} className='documents__item__cross-btn'>
          <CrossIcon className='documents__item__cross-btn__icon' />
        </button>
      </div>
      <div className='documents__item'>
        <a className='documents__item__name' href=''>НМЦК.docx</a>
        <button onClick={() => deliteItem(index)} className='documents__item__cross-btn'>
          <CrossIcon className='documents__item__cross-btn__icon' />
        </button>
      </div>
    </div>
  )
}