import React, { useState, useEffect } from "react";
import './FilterElement.sass';
import { Checkbox } from "../../checkbox/Checkbox";
import { FILTERS_ID, STAGES_ID, TRANSLATED_STAGES } from "../../../const";

export const Stage = (props) => {
  let isChecked = () => {
    const dict = {};
    for (var key in STAGES_ID)
    dict[key] = false;
    return dict;
  };
  const parentCallback = props.parentCallback;
  const id = FILTERS_ID.STAGE;
  const [value, valueChange] = useState(isChecked());
  const stageList = Object.values(STAGES_ID);

  const callback = (val, elementKey) => {
    valueChange({
      ...value, 
      ...value[elementKey], 
      [elementKey]: val
    });
  };

  useEffect(() => {
    parentCallback(value, id)
  }, [value]);

  return (
    <>
      <div className='filter'>
        <p className='filter__title'>Этап</p>
        <div className='filter__checkbox-group'>
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
