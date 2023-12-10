import React from 'react';
import useModal from './useModal';
import './Modal.sass'
import CrossIcon from './../../assets/cross.svg?react';

export const Modal = (props) => {
  const data = props.dataComponent || '';
  const title = props.title || '';
  const callBtn = props.button || <button>ModalBtn</button>
  const parentCallback = props.parentCallback;
  const { isModalOpen, openModal, closeModal, modalContent } = useModal();

  function handleButtonClick() {
    openModal(<ModalContent onClose={closeModal} parentCallback={parentCallback} title={title} data={data} />);
  }

  return (
    <div>
      <div onClick={handleButtonClick}>
        {callBtn}
      </div>
      {isModalOpen && modalContent}
    </div>
  );
}

function ModalContent({ onClose, data, title, parentCallback }) {
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

        <div>{data}</div>
        
        <div className='modal-window__component__footler'>
          <button className='modal-window__component__footler__close-btn' onClick={onClose}>Закрыть</button>
          <button className='modal-window__component__footler__confirm-btn' onClick={handleConfirm}>Применить</button>
        </div>
      </div>
    </div>
  );
}