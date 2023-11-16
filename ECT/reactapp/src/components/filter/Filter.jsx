import React, { useEffect, useState } from 'react';
import './Filter.sass'
import { FILTERS_ID } from '../../const';
import { CustomerName } from './CustomerName';
import { Date } from './Date';
import { Okved } from './Okved';
import { Region } from './Region';
import { Stage } from './Stage';

export default function Filter (props) {
  const listFiltersIds = props.listFiltersIds || [];
  
  return (
    <>
    <div>
      {listFiltersIds.map((element) => filtersElements[element])}
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