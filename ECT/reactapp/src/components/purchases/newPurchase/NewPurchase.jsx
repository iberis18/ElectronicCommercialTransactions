import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import { getPurchase } from '../../../api/domains/purchasesApi';
import './NewPurchase.sass';
import { Radiobutton } from '../../radiobutton/Radiobutton';
import { PURCHASE_TYPE, TRANSLATED_PURCHASE_TYPE } from '../../../const';

export const NewPurchase = () => {
  let radioPurchaseTypeList = Object.keys(PURCHASE_TYPE).map(key => ({
    value: key,
    name: TRANSLATED_PURCHASE_TYPE[key],
    checked: false,
  }));
  radioPurchaseTypeList[0].checked = true;

  return (
    <div className='new-purchase-page'>
      <p className='new-purchase-page__title'>Создать новую закупку</p>
      <Radiobutton list={radioPurchaseTypeList} />
    </div>
  )
}