import React, { useEffect, useState } from 'react';
import './Filter.sass'
import { FILTERS_ID } from '../../const';
import { CustomerName } from './filterElements/CustomerName';
import { Date } from './filterElements/Date';
import { Okved } from './filterElements/Okved';
import { Region } from './filterElements/Region';
import { Stage } from './filterElements/Stage';

export const Filter = (props) => {
  const listFiltersIds = props.listFiltersIds || [];
  const [value, valueChange] = useState({});

  const callback = (val, id) => {
    valueChange({
      ...value, 
      [id] : val, 
      // [elementKey]: val
    });
  };

  useEffect(() => {
    console.log(value);
  }, [value])

  const filtersElements = {
    [FILTERS_ID.CUSTOMER_NAME]: <CustomerName parentCallback={callback} />,
    [FILTERS_ID.DATE]: <Date parentCallback={callback} />,
    [FILTERS_ID.OKVED]: <Okved parentCallback={callback} />,
    [FILTERS_ID.REGION]: <Region parentCallback={callback} />,
    [FILTERS_ID.STAGE]: <Stage parentCallback={callback} />,
  };
  
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
