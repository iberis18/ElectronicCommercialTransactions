import React, { Component } from 'react';
import './NavMenu.sass'
import Logo from './../../assets/logo.svg?react';
import Ava from './../../assets/avatar.svg?react';

export default class NavMenu extends Component {
  static displayName = NavMenu.name;

  render() {
    return (
    <>
      <nav>
        <ul className="navbar">
          <li className='navbar__logo'>
            <a href='/'>
              <Logo className='navbar__logo__image'/>
              ЭКС
            </a>
          </li>
          <li className='navbar__element'>
            Закупки
            <ul className="dropdown">
              <a href='/allPurchases'><li>Все закупки</li></a>
              <a href='/myPurchases'><li>Мои закупки</li></a>
              <a href='/newPurchases'><li>Создать закупку</li></a>
            </ul>
          </li>
          <li className='navbar__element'>
            Каталог
            <ul className="dropdown">
              <a href='/allSte'><li>Все СТЕ</li></a>
              <a href='/mySte'><li>Мои СТЕ</li></a>
              <a href='/newSte'><li>Создать СТЕ</li></a>
            </ul>     
          </li>

          <a className='navbar__element' href='/companies'><li>Компании</li></a>
          <li className='navbar__element'>
            Сделки
            <ul className="dropdown">
              <a href='/win'><li>Выигранные</li></a>
              <a href='/participation'><li>Участие</li></a>
            </ul>     
          </li>
          <li className='navbar__element'>
            <a href='#'>
              ИП Пупкин В.С.
              <Ava className='navbar__logo__image'/>
            </a>
            <ul className="dropdown">
              <a href='/about'><li>Пупкин1</li></a>
              <a href='/about'><li>Пупкин2</li></a>
              <a href='/about'><li>Пупкин3</li></a>
            </ul>
          </li>
        </ul>
      </nav>  
    </>
    );
  }
}


