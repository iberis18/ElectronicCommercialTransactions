import React from 'react';
import './Modal.sass'
import CrossIcon from '../../../assets/cross.svg?react';

export const Modal = ({ show, onClose, parentCallback, data, title }) => {
  if (!show) {
    return null;
  }

  function handleConfirm() {
    parentCallback();
    onClose();
  }

  return (
    <div className='modal-window'>
      <div className='modal-window__component'>
        <p className='modal-window__component__title'>{title}</p>
        <button onClick={onClose} className='modal-window__component__close-btn'>
          <CrossIcon className='modal-window__component__close-btn__icon' />
        </button>

        <div className='modal-window__component__content'>{data}</div>
        
        <div className='modal-window__component__footler'>
          <button className='modal-window__component__footler__close-btn' onClick={onClose}>Закрыть</button>
          <button className='modal-window__component__footler__confirm-btn' onClick={handleConfirm}>Применить</button>
        </div>
      </div>
    </div>
  );
};
