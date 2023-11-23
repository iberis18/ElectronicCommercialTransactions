import React, { useEffect, useState } from 'react';
import { getMyFilterPurchases } from '../../../api/domains/purchasesApi';
import './Purchases.sass'
import { Search } from '../../search/Search';
import { CardPurchaseElement } from '../../cardPurchaseElement/CardPurchaseElement';
import { Filter } from '../../filter/Filter';
import { FILTERS_ID } from '../../../const';

export const MyPurchases = () => {
  const [page, pageChange] = useState('1');
  const [purchases, purchasesChange] = useState([]);
  const [purchasesCount, purchasesCountChange] = useState(0);
  const listFiltersIds = [
    FILTERS_ID.STAGE, 
    FILTERS_ID.DATE,
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
    const data = await getMyFilterPurchases(page, {...filtersValue, ...searchValue});
    purchasesChange(data.response);
    purchasesCountChange(data.response.length);
  }, [filtersValue, searchValue]);

  return (
    <>
      <Search page={page} parentCallback={searchCallback} />
      <div className='purchases-page'>
          <div className='purchases-page__row'>
            <div className='purchases-page__list-col-left'>
              <p className='purchases-page__title'>Мои закупки</p>
              <p className='purchases-page__subtitle'>
                {`${purchasesCount} запиc${purchasesCount === 1 
                  ? 'ь'
                  : `${purchasesCount % 10 < 5 && purchasesCount % 10 !== 0 
                    ? 'и' 
                    : 'ей' }`}`}
              </p>
              <div>
              {
                purchasesCount > 0 
                  ? purchases.map((element) => (
                      <CardPurchaseElement key={element.id} element={element} />
                    ))
                  : <p className='purchases-page__no-elements'>У вас еще нет ни одной закупки!</p>
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