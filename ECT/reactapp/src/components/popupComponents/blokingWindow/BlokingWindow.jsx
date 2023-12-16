import React from 'react';
import './BlokingWindow.sass'

export const BlokingWindow = ({ show, message, title }) => {
  if (!show) {
    return null;
  }
  
  return (
    <div className='bloking-window'>
      <div className='bloking-window__content'>
        <p className='bloking-window__content__title'>
          {title}
        </p>
        <p className='bloking-window__content__data'>
          {message}
        </p>
      </div>
    </div>
  );
};
