import React, { useState } from "react";
import { Input } from '../../input/Input'
import './FilterElement.sass';

export const Date = () => {
  const [value, valueChange] = useState('');

  const callback = (value) => {
    valueChange(value);
  }

  return (
    <>
      <div className='filter'>
        <p className='filter__title'>Дата</p>

        <p className='filter__subtitle'>Размещения</p>  
        <div className='filter__table'>
          <div className='filter__table__row'>
            <div className='filter__table__col'>
              <div className='filter__input'>
                <Input type='date' parentCallback={callback} />
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
                <Input type='date' parentCallback={callback} />
              </div>
            </div>
          </div>
        </div>

        <p className='filter__subtitle'>Проведения</p>  
        <div className='filter__table'>
          <div className='filter__table__row'>
            <div className='filter__table__col'>
              <div className='filter__input'>
                <Input type='date' parentCallback={callback} />
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
                <Input type='date' parentCallback={callback} />
              </div>
            </div>
          </div>
        </div>
        <div className='filter__line'/>
      </div>
    </>
  );
};