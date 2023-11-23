import React, { useEffect, useState } from 'react';
import { getFilterPurchases } from '../../../api/domains/purchasesApi';
import './Purchases.sass'
import { Search } from '../../search/Search';
import { CardPurchaseElement } from '../../cardPurchaseElement/CardPurchaseElement';
import { Filter } from '../../filter/Filter';
import { FILTERS_ID } from '../../../const';

export const MyPurchases = () => {
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
  const [searchValue, searchValueChange] = useState('');
  const searchCallback = (val) => {
    searchValueChange(val);
  };
  useEffect(() => async() => {
    const data = await getFilterPurchases(page, {...filtersValue, ...searchValue});
    purchasesChange(data.response);
  }, [filtersValue, searchValue]);

  return (
    <>
      <Search page={page} parentCallback={searchCallback} />
      <div className='purchases-page'>
          <div className='purchases-page__row'>
            <div className='purchases-page__list-col-left'>
              <p className='purchases-page__title'>Результаты поиска</p>
              <p className='purchases-page__subtitle'>Более 39 000 000 записей</p>
              <div>
              {
                purchases.map((element) => (
                  <CardPurchaseElement key={element.id} element={element} />
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