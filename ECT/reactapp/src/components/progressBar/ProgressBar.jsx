import React, { useEffect, useState } from 'react';
import './ProgressBar.sass';

export const ProgressBar = (props) => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setCompleted(props.completed);
  }, [props.completed]);

  const fillerWidth = {
    width: `${completed}%`
  }

  return (
    <div className='progress-bar'>
      <div className='progress-bar__filler' style={fillerWidth}>
        <span className='progress-bar__filler__label'>{`${completed}%`}</span>
      </div>
    </div>
  )
}