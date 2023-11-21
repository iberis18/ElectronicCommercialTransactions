import React, { useEffect, useState } from 'react';
import { getAllPurchases } from '../../../api/domains/purchasesApi';
import './AllPurchases.sass'
import Search from '../../search/Search';
import CardPurchaseElement from '../../cardPurchaseElement/CardPurchaseElement';
import { Filter } from '../../filter/Filter';
import { FILTERS_ID } from '../../../const';

export default function AllPurchases () {
  const [page, pageChange] = useState('1');
  const [purchases, purchasesChange] = useState([]);
  const listFiltersIds = [
    FILTERS_ID.STAGE, 
    FILTERS_ID.DATE, 
    FILTERS_ID.CUSTOMER_NAME,
  ];

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
              <Filter listFiltersIds={listFiltersIds} />
            </div>
          </div>
        </div>          
    </>
  );
};