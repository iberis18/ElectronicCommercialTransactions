import React, { useState } from "react";
import './FilterElement.sass';
import { Checkbox } from "../../checkbox/Checkbox";
import { STAGES_ID, TRANSLATED_STAGES } from "../../../const";

export const Stage = () => {
  let isChecked = () => {
    const arr = {};
    for (var key in STAGES_ID)
      arr[key] = false;
    return arr;
  };
  const [value, valueChange] = useState(isChecked());
  const stageList = Object.values(STAGES_ID);

  const callback = (val, elementKey) => {
    valueChange({
      ...value, 
      ...value[elementKey], 
      [elementKey]: val
    });
  };

  return (
    <>
      <div className='filter'>
        <p className='filter__title'>Этап</p>
        <div className='filter__input'>
          {stageList.map((element) => {
            return(
              <Checkbox key={STAGES_ID[element]} elementKey={STAGES_ID[element]} parentCallback={callback} label={TRANSLATED_STAGES[element]}/>
            )
          })}
          
        </div>
        <div className='filter__line'/>
      </div>
    </>
  );
};
