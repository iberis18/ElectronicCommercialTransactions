import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import { addNewPurchases, getPurchase } from '../../../api/domains/purchasesApi';
import './NewPurchase.sass';
import { Radiobutton } from '../../radiobutton/Radiobutton';
import { ALERT_LEVEL, PURCHASE_TYPE, STAGES_ID, TRANSLATED_PURCHASE_TYPE } from '../../../const';
import { Input } from '../../input/Input';
import { EditableCommoditiesTabel } from '../../commodities/editableCommoditiesTabel/EditableCommoditiesTabel';
import { Documents } from '../../documents/Documents';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../../popupComponents/alert/Alert';
import { usePopup } from '../../popupComponents/usePopup';

export const NewPurchase = () => {
  const [isShowingAlert, toggleAlert] = usePopup();
  const [radioPurchaseTypes, setRadioPurchaseTypes] = useState(
    Object.keys(PURCHASE_TYPE).map(key => ({
    value: key,
    name: TRANSLATED_PURCHASE_TYPE[key],
    checked: key == PURCHASE_TYPE.AUCTION ? true : false,
  })));
  const [auctionDate, setAuctionDate] = useState();
  const [purchase, purchaseChange] = useState({});
  const [name, nameCallback] = useState('');
  const [startCost, setStartCost] = useState(0);
  const [commodityList, changeCommodityList] =  useState([]);
  const navigate = useNavigate();

  useEffect(() => async() => {
    const data = await getPurchase(1);
    purchaseChange(data);
  }, []);

  const editableCommoditiesTabelCallback = (commodityList, startCost) => {
    setStartCost(startCost);
    changeCommodityList(commodityList);
  };

  const submit = async() => {
    const response = await addNewPurchases({
      name: name,
      customer: 'Рога и копыта',
      startCost: startCost,
      postingDate: new Date(),
      dateOfAuction: auctionDate,
      commodity: commodityList.map((elem) => { 
        return {
          okpd2: elem.okpd2,
          name: elem.name,
          unit: elem.unit,
          quantity: elem.quantity,
          price: elem.price,
          cost: elem.cost,
        }
      }),
      documents: [],
      stage: STAGES_ID.WAITS,
      type: (radioPurchaseTypes.filter(elem => elem.checked === true))[0].value,
    });
    // console.log(response);
    alert('Успешно добавлено!');
    // if(!isShowingAlert)
    //   toggleAlert();
    navigate(`/purchase/${response.id}`);
  }

  // useEffect(() => {
  //   console.log(auctionDate);
  // }, [auctionDate]);

  return (
    <div className='new-purchase-page'>
      {/* <Alert 
        show={isShowingAlert}
        onClose={toggleAlert}
        message={'Новая закупка успешно добавлена!'}
        title={'Успешно!'} 
        level={ALERT_LEVEL.SUCCESS}
      /> */}

      <p className='new-purchase-page__title'>Создать новую закупку</p>
      <div className='new-purchase-page__radio'>
        <Radiobutton list={radioPurchaseTypes} groupName='purchase-type' parentCallback={setRadioPurchaseTypes} />
      </div>
      <div className='new-purchase-page__date'>
        <p className='new-purchase-page__subtitle'>Дата проведения</p>
        <Input type='datetime-local' parentCallback={setAuctionDate} />
      </div>
      <p className='new-purchase-page__subtitle'>Название</p>
      <Input placeholder='Название закупки' parentCallback={nameCallback} />
      <p className='new-purchase-page__subtitle'>Информация об объекте закупки</p>
      <EditableCommoditiesTabel parentCallback={editableCommoditiesTabelCallback}/>
      <Documents />
      <button className='new-purchase-page__submit-btn' onClick={submit}>Опубликовать закупку</button>
    </div>
  )
}