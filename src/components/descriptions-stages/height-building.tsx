import React from "react";
import { useCalcDispatch, useCalcSelector } from "store/hooks";
import { changeHeight, } from "store/reducer";
import * as E from './elements'

/**Компонент, позволяющий установить количество этажей */
export const HeightBuilding = () => {
  const dispatch = useCalcDispatch();
  const valueHeight = useCalcSelector(state => state.height);

  const handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(changeHeight(Number.parseInt(event.currentTarget.value)));
  }

  return (
    <>
      <E.Description>Количество этажей(число):</E.Description>
      <E.WrapperSizes>
        <E.InputTextField
          name={"height"}
          type={'number'}
          size={2}
          onChange={handleChangeInput}
          title="Введите количество этажей цифрами"
          value={valueHeight.toString()}
        />
      </E.WrapperSizes>
    </>
  );
};
