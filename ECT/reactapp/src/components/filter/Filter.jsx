import React, { useEffect, useState } from 'react';
import './Filter.sass'
import { FILTERS_ID } from '../../const';
import { CustomerName } from './filterElements/CustomerName';
import { Date } from './filterElements/Date';
import { Okved } from './filterElements/Okved';
import { Region } from './filterElements/Region';
import { Stage } from './filterElements/Stage';

export default function Filter (props) {
  const listFiltersIds = props.listFiltersIds || [];
  
  return (
    <>
    <div className='filters'>
      <p className='filters__title'>Параметры поиска</p>
      <div className='filters__line'/>
      {listFiltersIds.map((element) => 
        <div key={element}>
          {filtersElements[element]}
        </div>)}
    </div>
    </>
  );
};

const filtersElements = {
  [FILTERS_ID.CUSTOMER_NAME]: <CustomerName />,
  [FILTERS_ID.DATE]: <Date />,
  [FILTERS_ID.OKVED]: <Okved />,
  [FILTERS_ID.REGION]: <Region />,
  [FILTERS_ID.STAGE]: <Stage />,
};