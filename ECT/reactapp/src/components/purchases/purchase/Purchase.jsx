import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import { getPurchase } from '../../../api/domains/purchasesApi';
import { CardPurchaseElement } from '../../cardPurchaseElement/CardPurchaseElement';
import './Purchase.sass';
import { STAGES_ID } from '../../../const';
import { CommodityTabel } from '../commodity/CommodityTabel';

export const Purchase = () => {
  const { id } = useParams();
  const [purchase, purchaseChange] = useState({});

  useEffect(() => async() => {
    const data = await getPurchase(id);
    purchaseChange(data);
  }, []);

  useEffect(() => {
    console.log(purchase);
  }, [purchase]);

  return (
    <div className='purchase-page'>
      <div className='purchase-page__card'>
        <CardPurchaseElement element={purchase} disableLink={true}/>
      </div>
      <div className='purchase-page__content'>
        <div className={`purchase-page__content__ongoing${purchase.stage === STAGES_ID.ONGOING ? '' : '-hidden'}`}>
          <p className='purchase-page__content__ongoing__title'>Внимание! Идут торги!</p>
          <button className='purchase-page__content__ongoing__button'>Перейти в аукционный зал</button>
        </div> 
        <p className='purchase-page__content__title'>Информация об объекте закупки</p>
        <CommodityTabel commodityList={purchase.commodity}/>
      </div>
    </div>
  )
}