import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import './AuctionRoom.sass';
import { getPurchase } from '../../api/domains/purchasesApi';
import { ProgressBar } from '../progressBar/ProgressBar';
import { formattingNumerToTwoDigits, spaceDigits } from '../../helper';
import _ from 'lodash';
import { STAGES_ID } from '../../const';

export const AuctionRoom = () => {
  const { id } = useParams();
  const [purchase, purchaseChange] = useState({});
  const [curentCost, setCurentCost] = useState(0);
  const [drop, setDrop] = useState(0);
  const [offersList, changeOffersList] = useState([]);  // [{celler: 'id', cellerName: 'name', value: 0, time: time}]
  const [topList, changeTopList] = useState([]);  // [{place: 0, celler: 'id', cellerName: 'name', value: 0, time: time}]
  const [inputPrice, changeInputPrice] = useState('');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const myId = 1;
  const myName = 'Рога и копыта';
  
  //Timer
  const delayResend = 180;
  const [delay, setDelay] = useState(delayResend);
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);
  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);
    if (delay === 0) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  });
  //

  const submit = () => {
    if (inputPrice >= min && inputPrice <= max) {
      //timer
      setDelay(delayResend);

      //topList
      let oldItem = topList.find(item => item.id === myId);
      let newItem = oldItem || {id: myId, cellerName: myName};
      newItem.value = Number(inputPrice).toFixed(2);
      newItem.time = new Date();
      oldItem 
        ? topList[topList.indexOf(oldItem)] = newItem
        : topList.push(newItem);
      _.orderBy(topList, ['value', 'time'], ['asc', 'desc']); //asc -- возрастание, desc -- убывание
      topList.map((item, index) => item.place = index + 1);
      changeTopList([...topList]);

      //offerList
      offersList.unshift({ 
        id: myId, 
        cellerName: myName, 
        value: Number(inputPrice).toFixed(2), 
        time: new Date(),
      });
      changeOffersList([...offersList]);

      //cost
      const topValue = topList.filter((item => item.place === 1))[0]?.value;
      setCurentCost(topValue);
      setDrop((100 - topValue * 100 / purchase.startCost).toFixed(2));
      changeInputPrice('');
      setMax((topValue * 0.995).toFixed(2));
      setMin((topList.filter((item => item.place === 1))[0]?.value * 0.95).toFixed(2));
    }
    else 
      alert(`input over of range! ${min}, ${max}, ${inputPrice}`);
  }

  useEffect(() => async() => {
    const data = await getPurchase(id);
    if (data.stage !== STAGES_ID.ONGOING)
      setDelay(0);
    purchaseChange(data);
    setCurentCost(data.startCost.toFixed(2));
    changeInputPrice('');
    setMax((data.startCost * 0.995).toFixed(2));
    setMin((data.startCost * 0.95).toFixed(2));
  }, []);

  useEffect(() => {
    console.log(offersList);
  }, [offersList]);

  return (
    <div className='auction-room'>
      <div className='auction-room__row'>

        {/* левый столбик */}
        <div className='auction-room__col'>
          <p className='auction-room__title'>Торговый зал</p>
          <p className='auction-room__number'>№{purchase.number}</p>

          <div className='auction-room__row'>
            <div className='auction-room__col'>
              <p className='auction-room__label'>Начальная цена:</p>
              <p className='auction-room__label'>Текущая цена:</p>
              <p className='auction-room__label'>Текущее снижение:</p>
            </div>
            <div className='auction-room__col'>
              <p className='auction-room__value'>{spaceDigits(purchase.startCost)} руб.</p>
              <p className='auction-room__value'>{spaceDigits(curentCost)} руб.</p>
              <p className='auction-room__value'>{drop}%</p>
            </div>
          </div>

          {/* полоска */}
          <div className='auction-room__progress-bar'>
            <ProgressBar completed={(100 - drop).toFixed(2)} />
          </div>

          <div className='auction-room__row'>
            <div className='auction-room__col'>
              <p className='auction-room__label'>Ваше предложение:</p>
              <p className='auction-room__label'>Ваше место:</p>
            </div>
            <div className='auction-room__col'>
              <p className='auction-room__value'>{topList.find(item => item.id == myId) ? `${spaceDigits(topList.find(item => item.id == myId).value)} руб.` : 'Ещё нет!'}</p>
              <p className='auction-room__value'>{topList.find(item => item.id == myId)?.place || 'Вне конкурса!'}</p>
            </div>
          </div>
        </div>
        
        {/* средний столбик */}
        <div className='auction-room__col'>
          <p className='auction-room__time-label'>Времени до окончания:</p>
          <div className='auction-room__time-value'>{formattingNumerToTwoDigits(minutes)}:{formattingNumerToTwoDigits(seconds)}</div>
          <p className='auction-room__bold-label'>Наименование:</p>
          <p className='auction-room__name'>{purchase?.name}</p>

          <div className='auction-room__row'>
            <div className='auction-room__col'>
              <div className='auction-room__block-item'>
                <p className='auction-room__label'>Лучшее предложение:</p>
                <p className='auction-room__label'>Всего предложений:</p>
                <p className='auction-room__label'>Шаг аукциона:</p>
              </div>
              
            </div>
            <div className='auction-room__col'>
              <p className='auction-room__value'>{topList.find(item => item.place === 1) ? `${spaceDigits(topList.find(item => item.place === 1).value)} руб.` : 'Станьте первым!'}</p>
              <p className='auction-room__value'>{offersList.length}</p>
              <p className='auction-room__value'>{`0.5% = ${spaceDigits(purchase.startCost / 200)} руб.`}</p>
            </div>
          </div>

          <div className='auction-room__block-item'>
            <p className='auction-room__label'>Подать ценовое предложение:</p>
            <button className='auction-room__new-price__button' onClick={()=>changeInputPrice(min)}>{spaceDigits(min)} руб.</button>
            <p className='auction-room__new-price'> — </p>
            <button className='auction-room__new-price__button' onClick={()=>changeInputPrice(max)}>{spaceDigits(max)} руб.</button>
          </div>
          <div className='auction-room__row'>
            <div className='auction-room__col'>
            <input  
              className='input-field'
              type='number'
              value={inputPrice}
              onChange={e => changeInputPrice(e.target.value)}
              placeholder={spaceDigits(max)} 
            />
            </div>
            <div className='auction-room__col'>
              <button className='auction-room__submit' disabled={!delay} onClick={submit}>Подать</button>
            </div>
          </div>
          
        </div>

        {/* правый столбик */}
        <div className='auction-room__col'>
          <div className='auction-room__offer-list'>
            <p className='auction-room__time-label'>Ход торгов:</p>
            {
              offersList.length
                ? offersList.map((item, index) => 
                  <p className={`auction-room__label ${!index && !delay ? 'auction-room__label__win' : ''}`} key={index}>{index + 1}. {item.cellerName} — {item.value} руб.</p>
                )
                : <p className='auction-room__label'>Предложений пока что нет!</p>
            }
          </div>
        </div>

      </div>
    </div>
  )
}