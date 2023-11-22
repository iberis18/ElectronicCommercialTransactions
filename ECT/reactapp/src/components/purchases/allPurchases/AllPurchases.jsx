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
  const [filtersValue, filtersValueChange] = useState({});
  const filtersCallback = (val) => {
    filtersValueChange(val);
  };

  useEffect(() => async() => {
    const data = await getAllPurchases(page);
    purchasesChange(data.response);
  }, []);

  return (
    <>
      <Search page={page} setSearchResult={purchasesChange} />
      <div className='purchases-page'>
          <div className='purchases-page__row'>
            <div className='purchases-page__list-col-left'>
              <p className='purchases-page__title'>Результаты поиска</p>
              <p className='purchases-page__subtitle'>Более 39 000 000 записей</p>
              <div>
              {
                purchases.map((element, index) => (
                  <CardPurchaseElement key={index} element={element} />
                ))
              }
              </div>
            </div>

            <div className='purchases-page__filter-col-right'>
              <Filter listFiltersIds={listFiltersIds} parentCallback={filtersCallback} />
            </div>
          </div>
        </div>          
    </>
  );
};