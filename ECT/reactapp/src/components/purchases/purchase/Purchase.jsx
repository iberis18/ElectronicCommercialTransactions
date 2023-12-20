import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import { getPurchase } from '../../../api/domains/purchasesApi';
import { CardPurchaseElement } from '../../cardPurchaseElement/CardPurchaseElement';
import './Purchase.sass';
import { STAGES_ID } from '../../../const';
import { CommoditiesTabel } from '../../commodities/comoditiesTabel/CommoditiesTabel';
import { useNavigate } from 'react-router-dom';

export const Purchase = () => {
  const { id } = useParams();
  const [purchase, purchaseChange] = useState({});
  const navigate = useNavigate();

  useEffect(() => async() => {
    const data = await getPurchase(id);
    purchaseChange(data);
  }, []);

  // useEffect(() => {
  //   console.log(purchase);
  // }, [purchase]);

  return (
    <div className='purchase-page'>
      <div className='purchase-page__card'>
        <CardPurchaseElement element={purchase} disableLink={true}/>
      </div>
      <div className='purchase-page__content'>
        <div className={`purchase-page__content__ongoing${purchase.stage === STAGES_ID.ONGOING ? '' : '-hidden'}`}>
          <p className='purchase-page__content__ongoing__title'>Внимание! Идут торги!</p>
          <button className='purchase-page__content__ongoing__button' onClick={() => navigate(`/auctionRoom/${id}`)}>Перейти в аукционный зал</button>
        </div> 
        <p className='purchase-page__content__title'>Информация об объекте закупки</p>
        <CommoditiesTabel commodityList={purchase.commodity} startCost={purchase.startCost} />
        {/* <p className='purchase-page__content__title'>Документы</p>
        <a className='purchase-page__content__document' href=''>Описание объекта закупки.docx</a>
        <a className='purchase-page__content__document' href=''>ТЗ.docx</a>
        <a className='purchase-page__content__document' href=''>НМЦК.docx</a> */}
      </div>
    </div>
  )
}