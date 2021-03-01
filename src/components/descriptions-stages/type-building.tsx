import React from "react";
import * as E from './elements';
import { buildingTypes } from 'models';
import { useCalcDispatch } from "store/hooks";
import { changeBuilding, nextStep } from "store/reducer";

/**Компонент, позволяющий установить тип здания */
export const TypeBuilding = () => {
  const dispatch = useCalcDispatch();

  const handleClickType = (index: number) => {
    dispatch(changeBuilding(index))
    dispatch(nextStep());
    if (index === 2) dispatch(nextStep());
  }
  return (
    <E.Wrapper>
      <E.Description>Что будем строить?</E.Description>
      <ul>
        {buildingTypes.map((type, index) => (
          <E.InputChangeType key={index} onClick={() => handleClickType(index + 1)}>{type}</E.InputChangeType>
        ))}
      </ul>
    </E.Wrapper>
  );
};
