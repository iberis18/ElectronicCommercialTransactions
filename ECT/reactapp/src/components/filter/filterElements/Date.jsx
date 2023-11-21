import React, { useState, useEffect } from "react";
import { Input } from '../../input/Input'
import './FilterElement.sass';
import { FILTERS_ID, FILTER_DATES_TYPE } from "../../../const";

export const Date = (props) => {
  const [value, valueChange] = useState(() => {
    const dict = {};
    for (var key in FILTER_DATES_TYPE)
      dict[key] = '';
    return dict;
  });
  const parentCallback = props.parentCallback;
  const id = FILTERS_ID.DATE;

  const callback = (val, elementKey) => {
    valueChange({
      ...value, 
      ...value[elementKey], 
      [elementKey]: val
    });
  };

  useEffect(() => {
    parentCallback(value, id);
  }, [value]);

  return (
    <>
      <div className='filter'>
        <p className='filter__title'>Дата</p>

        <p className='filter__subtitle'>Размещения</p>  
        <div className='filter__table'>
          <div className='filter__table__row'>
            <div className='filter__table__col'>
              <div className='filter__input'>
                <Input type='date' value={value[FILTER_DATES_TYPE.POSTING_DATE_START]} parentCallback={callback} elementKey={FILTER_DATES_TYPE.POSTING_DATE_START} />
              </div>
            </div>
            <div className='filter__table__col'>
              <p className='filter__table__col__label'>&ensp;</p>
            </div>
            <div className='filter__table__col'>
              <p className='filter__table__col__label'>–&ensp;</p>
            </div>
            <div className='filter__table__col'>
              <div className='filter__input'>
                <Input type='date' value={value[FILTER_DATES_TYPE.POSTING_DATE_FINISH]} parentCallback={callback} elementKey={FILTER_DATES_TYPE.POSTING_DATE_FINISH} />
              </div>
            </div>
          </div>
        </div>

        <p className='filter__subtitle'>Проведения</p>  
        <div className='filter__table'>
          <div className='filter__table__row'>
            <div className='filter__table__col'>
              <div className='filter__input'>
                <Input type='date' value={value[FILTER_DATES_TYPE.DATE_OF_AUCTION_START]} parentCallback={callback} elementKey={FILTER_DATES_TYPE.DATE_OF_AUCTION_START} />
              </div>
            </div>
            <div className='filter__table__col'>
              <p className='filter__table__col__label'>&ensp;</p>
            </div>
            <div className='filter__table__col'>
              <p className='filter__table__col__label'>–&ensp;</p>
            </div>
            <div className='filter__table__col'>
              <div className='filter__input'>
                <Input type='date' value={value[FILTER_DATES_TYPE.DATE_OF_AUCTION_FINISH]} parentCallback={callback} elementKey={FILTER_DATES_TYPE.DATE_OF_AUCTION_FINISH} />
              </div>
            </div>
          </div>
        </div>
        <div className='filter__line'/>
      </div>
    </>
  );
};