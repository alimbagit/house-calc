import React from "react";
import * as E from './elements';
import { materialTypes } from 'models';
import { useCalcDispatch } from "store/hooks";
import { changeMaterial, nextStep } from "store/reducer";

/**Компонент для установления типа материала */
export const TypeMaterial = () => {
  const dispatch = useCalcDispatch();

  const handleClickType = (index_material: number) => {
    dispatch(changeMaterial(index_material));
    dispatch(nextStep());
  }
  return (
    <E.Wrapper>
      <E.Description>Материал стен</E.Description>
      <ul>
        {materialTypes.map((type, index) => (
          <li key={index} onClick={() => handleClickType(index+1)}>{type}</li>
        ))}
      </ul>
    </E.Wrapper>
  );
};
