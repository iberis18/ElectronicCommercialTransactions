import React, { useEffect, useState } from 'react';
import './Home.sass'
import gifImage from '../../assets/home.gif';

export const Home = () => {
  return (
    <>
      <div className='home-page'>
        <div className='home-pag__row'>
          <div className='home-page__col'>
            <p className='home-page__title-gray'>Электронные</p>
            <p className='home-page__title-gray'>Корпоративные</p>
            <p className='home-page__title-coral'>Сделки</p>
            <p className='home-page__subtitle'>Оперативные закупки товаров, работ и услуг</p>
            <div className='home-page__line'/>
          </div>
          <div className='home-page__col'>
            <img className='home-page__gif' src={gifImage} alt="GIF" />
          </div>
        </div>
      </div>         
    </>
  );
};