import React from "react";
import { useCalcDispatch, useCalcSelector } from "store/hooks";
import { changeSizes } from "store/reducer";
import * as E from './elements'

/**Компонент для ввода размеров здания */
export const Sizes = () => {
  const dispatch = useCalcDispatch();
  const valueSizeX = useCalcSelector(state => state.sizeX);
  const valueSizeY = useCalcSelector(state => state.sizeY);
  const handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {

    dispatch(changeSizes({
      sizeX: event.currentTarget.name == "sizex" ? Number.parseInt(event.currentTarget.value) : valueSizeX,
      sizeY: event.currentTarget.name == "sizey" ? Number.parseInt(event.currentTarget.value) : valueSizeY
    }))
  }

  return (
    <E.Wrapper>
      <E.Description>Длина стен (в метрах):</E.Description>
      <input
        name={"sizex"}
        type={'number'}
        size={3}
        onChange={handleChangeInput}
        value={valueSizeX.toString()}
      />
      <input
        name={"sizey"}
        type={'number'}
        size={3}
        onChange={handleChangeInput}
        value={valueSizeY.toString()}
      />
    </E.Wrapper>
  );
};
