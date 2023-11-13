import React, { Component } from 'react';
import './CardPurchaseElement.sass'

export default class CardPurchaseElement extends Component {
  static displayName = CardPurchaseElement.name;

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  //todo make tooltip
  render() {
    return (
      <>
        <div className='frame-element'>
          <div className='frame-element__row'>
            <div className='frame-element__col-left'>
              <p className='frame-element__small-label-name'>Электронный аукцион</p>
              <a className='frame-element__title-link' href='#'>№ 0888600001023000032</a>
              <p className='frame-element__status'>Ожидает проведения</p>
              <p className='frame-element__small-label-name'>Объект закупки</p>
              <p className='frame-element__label-text'>Проведение лабораторных и инструментальных исследований и испытаний в рамках производственного контроля</p>
              <p className='frame-element__small-label-name'>Заказчик</p>
              <a className='frame-element__small-link' href='#'>ООО “Рога и Копыта”</a>
            </div>
            <div className='frame-element__col-right'>
              <p className='frame-element__small-label-name'>Начальная цена</p>
              <p className='frame-element__cost'>650 903,52 ₽</p>
              <p className='frame-element__small-label-name'>Размещено</p>
              <p className='frame-element__date'>28.09.2023</p>
              <p className='frame-element__small-label-name'>Дата проведения</p>
              <p className='frame-element__date'>06.10.2023</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}