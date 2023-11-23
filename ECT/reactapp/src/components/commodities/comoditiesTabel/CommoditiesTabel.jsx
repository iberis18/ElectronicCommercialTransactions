import React, { useEffect, useState } from 'react';
import './CommoditiesTabel.sass'

export const CommoditiesTabel = (props) => {
  const commodityList = props.commodityList || [];
  const startCost = props.startCost || 0;

  return (
    <>
      <table className='commodity-tabel'>
        <thead>
          <tr>
            <th>Код позиции</th>
            <th>Наименование товара, работы, услуги</th>
            <th>Ед. измерения</th>
            <th>Количество (объем работы, услуги)</th>
            <th>Цена за ед., р.</th>
            <th>Стоимость, р.</th>
          </tr>
        </thead>
        <tbody>
        {
          commodityList.map((item, index) =>
            <tr className='elements' key={index}>
              <td>{item.okpd2}</td>
              <td>{item.name}</td>
              <td>{item.unit}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.cost}</td>
            </tr>
          )
        }
        <tr className='total-sum'>
          <td colSpan='6'>Итого: {startCost} ₽</td>
        </tr>
        </tbody>
      </table>
    </>
  );
};