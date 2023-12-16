import React, { useEffect, useState } from 'react';
import './EditableCommoditiesTabel.sass'
import { spaceDigits } from '../../../helper';
import { Okpd2 } from '../../okpd2/Okpd2';
import { Modal } from '../../popupComponents/modal/Modal';
import { usePopup } from '../../popupComponents/usePopup';
import DropdownIcon from '../../../assets/dropdown.svg?react';
import { Input } from '../../input/Input';
import CrossIcon from '../../../assets/cross.svg?react';

export const EditableCommoditiesTabel = (props) => {
  const parentCallback = props.parentCallback;
  const [isShowingOkpd2Modal, toggleOkpd2Modal] = usePopup();
  const [isShowingUnitModal, toggleUnitModal] = usePopup();

  const [commodityList, changeCommodityList] =  useState(props.commodityList || [{
    okpd2: 'ОКПД2', 
    name: '', 
    unit: 'Штука', 
    quantity: '',
    price: '',
    cost: '0.00',
  }]);
  const [startCost, setStartCost] = useState(props.startCost || 0.00);

  const okpd2ModalCallback = (value) => {
  }

  const unitCallback = (value) => {
  }

  useEffect(() => {
    console.log(commodityList);
    let sum = 0;
    commodityList.map((item) => sum += Number(item.cost));
    setStartCost(sum.toFixed(2));
    parentCallback(commodityList, sum);
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
    commodityList[elementKey].quantity = value;
    commodityList[elementKey].cost = (commodityList[elementKey].quantity * commodityList[elementKey].price).toFixed(2);
    changeCommodityList([...commodityList]);
  }

  const priceCallback = (value, elementKey) => {
    commodityList[elementKey].price = value;
    commodityList[elementKey].cost = (commodityList[elementKey].quantity * commodityList[elementKey].price).toFixed(2);
    changeCommodityList([...commodityList]);
  }

  const deliteItem = (index) => {
    changeCommodityList([...commodityList.slice(0, index), ...commodityList.slice(index + 1)]);
  }

  const addItem = () => {
    changeCommodityList([...commodityList, {
      okpd2: 'ОКПД2', 
      name: '', 
      unit: 'Штука', 
      quantity: '',
      price: '',
      cost: '0.00',
    }]);
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
                  <Modal show={isShowingOkpd2Modal} onClose={toggleOkpd2Modal} parentCallback={okpd2ModalCallback} data={<Okpd2 />} title='Код ОКПД2' />
                  <button onClick={toggleOkpd2Modal} className='editable-commodity-tabel__modal-btn'>
                    <DropdownIcon className='editable-commodity-tabel__modal-btn__icon' />
                  </button>
                </div>
              </td>
              <td><Input value={item.name} placeholder='Название товара/работы/услуги' parentCallback={nameCallback} elementKey={index} /></td>
              <td>
                <div className='editable-commodity-tabel__inline-item'>{item.unit}</div>
                <div className='editable-commodity-tabel__inline-item'>
                  <Modal show={isShowingUnitModal} onClose={toggleUnitModal} parentCallback={unitCallback} data={<></>} title='Единицы измерения' />
                  <button onClick={toggleUnitModal} className='editable-commodity-tabel__modal-btn'>
                    <DropdownIcon className='editable-commodity-tabel__modal-btn__icon' />
                  </button>
                </div>
              </td>
              <td><Input type='number' placeholder='0.00' value={item.quantity} parentCallback={quantityCallback} elementKey={index} /></td>
              <td><Input type='number' placeholder='0.00' value={spaceDigits(item.price)} parentCallback={priceCallback} elementKey={index} /></td>
              <td>{spaceDigits(item.cost)}</td>
              <td>
                <button onClick={() => deliteItem(index)} className='editable-commodity-tabel__modal-btn'>
                  <CrossIcon className='editable-commodity-tabel__modal-btn__icon' />
                </button>
              </td>
            </tr>
          )
        }
        <tr className='total'>
          <td className='button' colSpan='3'>
            <button className='add-button' onClick={addItem}>Добавить позицию</button>
          </td>
          <td className='sum' colSpan='4'>Итого: {spaceDigits(startCost)} ₽</td>
        </tr>
        </tbody>
      </table>
    </>
  );
};