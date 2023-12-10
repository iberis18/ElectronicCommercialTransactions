import React, { useEffect, useState } from 'react';
import './EditableCommoditiesTabel.sass'
import { spaceDigits } from '../../../helper';
import { Okpd2 } from '../../okpd2/Okpd2';
import { Modal } from '../../modal/Modal';
import DropdownIcon from '../../../assets/dropdown.svg?react';
import { Input } from '../../input/Input';
import { name } from 'file-loader';

export const EditableCommoditiesTabel = (props) => {
  const [commodityList, changeCommodityList] =  useState(props.commodityList || [{
    okpd2: 'ОКПД2', 
    name: '', 
    unit: 'Штука', 
    quantity: '',
    price: '',
    cost: '0.00',
  }]);
  const startCost = props.startCost || 0.00;

  const okpd2ModalCallback = (value) => {
  }

  useEffect(() => {
    console.log(commodityList);
  }, [commodityList]);

  const nameCallback = (value, elementKey) => {
    changeCommodityList(commodityList.map((item, index) => {
      var returnValue = {...item};
      if (elementKey == index)
        returnValue.name = value;
      return (returnValue);
    }));
  }

  const quantityCallback = (value, elementKey) => {
    changeCommodityList(commodityList.map((item, index) => {
      var returnValue = {...item};
      if (elementKey == index) {
        returnValue.quantity = value;
        returnValue.cost = (item.quantity * item.price).toFixed(2);
      }
      return (returnValue);
    }));
  }

  const priceCallback = (value, elementKey) => {
    changeCommodityList(commodityList.map((item, index) => {
      var returnValue = {...item};
      if (elementKey == index) {
        returnValue.price = value;
        returnValue.cost = (item.quantity * item.price).toFixed(2)
      }
      return (returnValue);
    }));
  }

  const modalDropdownBtn = () => {
    return(
      <button className='editable-commodity-tabel__modal-btn'>
        <DropdownIcon className='editable-commodity-tabel__modal-btn__icon' />
      </button>
    )
  }

  return (
    <>
      <table className='editable-commodity-tabel'>
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
              <td>
                <div className='editable-commodity-tabel__inline-item'>{item.okpd2}</div>
                <div className='editable-commodity-tabel__inline-item'>
                  <Modal dataComponent={<Okpd2 />} title='Код ОКПД2' button={modalDropdownBtn()} parentCallback={okpd2ModalCallback} />
                </div>
              </td>
              <td><Input value={item.name} placeholder='Название товара/работы/услуги' parentCallback={nameCallback} elementKey={index} /></td>
              <td>
                <div className='editable-commodity-tabel__inline-item'>{item.unit}</div>
                <div className='editable-commodity-tabel__inline-item'>
                  <Modal dataComponent={<></>} title='Единицы измерения' button={modalDropdownBtn()} parentCallback={nameCallback} />
                </div>
              </td>
              <td><Input placeholder='0.00' value={spaceDigits(item.quantity)} parentCallback={quantityCallback} elementKey={index} /></td>
              <td><Input placeholder='0.00' value={spaceDigits(item.price)} parentCallback={priceCallback} elementKey={index} /></td>
              <td>{spaceDigits(item.cost)}</td>
            </tr>
          )
        }
        <tr className='total-sum'>
          <td colSpan='6'>Итого: {spaceDigits(startCost)} ₽</td>
        </tr>
        </tbody>
      </table>
    </>
  );
};