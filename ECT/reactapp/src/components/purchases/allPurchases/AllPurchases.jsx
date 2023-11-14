import React, { useEffect, useState } from 'react';
import { getAllPurchases } from '../../../api/domains/purchasesApi';
import './AllPurchases.sass'
import Search from '../../search/Search';
import CardPurchaseElement from '../../cardPurchaseElement/CardPurchaseElement';

export default function AllPurchases () {
  const [page, pageChange] = useState('1');
  const [purchases, purchasesChange] = useState([]);

  useEffect(() => {
    async () => {
      const data = await getAllPurchases(page, value);
      purchasesChange(data.response);
    }
  }, []);

  function handlePurchasesChange(value) {
    purchasesChange(value);
  }

  return (
    <>
      <Search page={page} setSearchResult={handlePurchasesChange} />
      <div className='purchases-page'>
          <div className='purchases-page__row'>
            <div className='purchases-page__list-col-left'>
              <p className='purchases-page__title'>Результаты поиска</p>
              <p className='purchases-page__subtitle'>Более 39 000 000 записей</p>
              <CardPurchaseElement />
            </div>

            <div className='purchases-page__filter-col-right'>
              <h1>AllPurchases</h1>
              <p>Welcome to AllPurchases!</p>
            </div>
          </div>
        </div>          
    </>
  );
};