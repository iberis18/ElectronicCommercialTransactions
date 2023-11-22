import React, { useEffect, useState } from 'react';
import './CardPurchaseElement.sass'
import { TRANSLATED_PURCHASE_TYPE, TRANSLATED_STAGES } from '../../const';
import { formattingDateToString } from '../../helper';

export const CardPurchaseElement = (props) => {
  const item = {
    id: props.element.id,
    number: props.element.number,
    name: props.element.name,
    customer: props.element.customer,
    startCost: props.element.startCost,
    postingDate: props.element.postingDate,
    dateOfAuction: props.element.dateOfAuction,
    commodity: props.element.commodity,
    documents: props.element.documents,
    stage: props.element.stage,
    type: props.element.type,
  };
  const disableLink = props.disableLink || false;

  //todo make tooltip
  return (
    <>
      <div className='frame-element'>
        <div className='frame-element__row'>
          <div className='frame-element__col-left'>
            <p className='frame-element__small-label-name'>{TRANSLATED_PURCHASE_TYPE[item.type]}</p>
            <a className='frame-element__title-link' href={`purchase/${item.id}`}>№ {item.number}</a>
            <p className='frame-element__status'>{TRANSLATED_STAGES[item.stage]}</p>
            <p className='frame-element__small-label-name'>Объект закупки</p>
            <p className='frame-element__label-text'>{item.name}</p>
            <p className='frame-element__small-label-name'>Заказчик</p>
            <a className='frame-element__small-link' href='#'>{item.customer}</a>
          </div>
          <div className='frame-element__col-right'>
            <p className='frame-element__small-label-name'>Начальная цена</p>
            <p className='frame-element__cost'>{item.startCost} ₽</p>
            <p className='frame-element__small-label-name'>Размещено</p>
            <p className='frame-element__date'>{formattingDateToString(item.postingDate)}</p>
            <p className='frame-element__small-label-name'>Дата проведения</p>
            <p className='frame-element__date'>{formattingDateToString(item.dateOfAuction)}</p>
          </div>
        </div>
      </div>
    </>
  );
};