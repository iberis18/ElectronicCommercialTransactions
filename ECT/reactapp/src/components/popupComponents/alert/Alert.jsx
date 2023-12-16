import React from 'react';
import './Alert.sass'
import CrossIcon from '../../../assets/cross.svg?react';

export const Alert = ({ show, onClose, message, title, level }) => {
  if (!show) {
    return null;
  }
  
  return (
    <div className='alert'>
      <div className={`alert-${level.toLowerCase()}`}>
        <p className={`alert-${level.toLowerCase()}__title`}>
          {title}
        </p>
        <button onClick={onClose} className='alert__close-btn'>
          <CrossIcon className='alert__close-btn__icon' />
        </button>
        <p className={`alert-${level.toLowerCase()}__message`}>
          {message}
        </p>
      </div>
    </div>
  );
};
