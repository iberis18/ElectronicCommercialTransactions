import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import { getPurchase } from '../../../api/domains/purchasesApi';
import './NewPurchase.sass';
import { Radiobutton } from '../../radiobutton/Radiobutton';
import { PURCHASE_TYPE, TRANSLATED_PURCHASE_TYPE } from '../../../const';
import { Input } from '../../input/Input';
import { formattingDateToString } from '../../../helper';
import { Okpd2 } from '../../okpd2/Okpd2';
import { Modal } from '../../modal/Modal';
import DropdownIcon from '../../../assets/dropdown.svg?react';


export const NewPurchase = () => {
  const [radioPurchaseTypes, setRadioPurchaseTypes] = useState(
    Object.keys(PURCHASE_TYPE).map(key => ({
    value: key,
    name: TRANSLATED_PURCHASE_TYPE[key],
    checked: key == PURCHASE_TYPE.AUCTION ? true : false,
  })));
  const [auctionDate, setAuctionDate] = useState();

  // useEffect(() => {
  //   console.log(auctionDate);
  // }, [auctionDate]);

  const Okpd2ModalCallback = () => {
    
  }

  const modalBtn = () => {
    return(
      <button className='new-purchase-page__modal-btn'>
        <DropdownIcon className='modal-window__component__modal-btn__icon' />
      </button>
    )
  }

  return (
    <div className='new-purchase-page'>
      <p className='new-purchase-page__title'>Создать новую закупку</p>
      <div className='new-purchase-page__radio'>
        <Radiobutton list={radioPurchaseTypes} groupName='purchase-type' parentCallback={setRadioPurchaseTypes} />
      </div>
      <div className='new-purchase-page__date'>
        <p className='new-purchase-page__subtitle'>Дата проведения</p>
        <Input type='datetime-local' parentCallback={setAuctionDate} />
      </div>
      <div className='new-purchase-page__info'>
        <p className='new-purchase-page__subtitle'>Информация об объекте закупки</p>
        <Modal dataComponent={<Okpd2 />} title='Код ОКПД2' button={modalBtn()} parentCallback={Okpd2ModalCallback}/>
      </div>
    </div>
  )
}