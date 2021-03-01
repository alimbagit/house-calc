import React from "react";
import { useCalcDispatch } from "store/hooks";
import { loadDataCalc, nextStep, reset } from "store/reducer";
import * as E from './elements'

/**Кнопка следующий шаг */
export const ButtonNext = () => {
  const dispatch = useCalcDispatch();
  const handleClick = () => {
    dispatch(nextStep());
  }
  return (
    <E.Button onClick={handleClick}>Далее</E.Button>
  );
};

/**Кнопка сброса состояния приложения */
export const ButtonCancel = () => {
  const dispatch = useCalcDispatch();
  const handleClick = () => {
    dispatch(reset());
  }

  return (
    <E.Button onClick={handleClick}>Отмена</E.Button>
  );
};

/**Кнопка рссчета */
export const ButtonCalc = () => {
  const dispatch = useCalcDispatch();
  const handleClick = () => {
    dispatch(loadDataCalc());
  }

  return (
    <E.Button onClick={handleClick}>Рассчитать</E.Button>
  );
};

/**Кнопка "новый рассчет"*/
export const ButtonNewCalc = () => {
  const dispatch = useCalcDispatch();
  const handleClick = () => {
    dispatch(reset());
  }
  return (
    <E.Button onClick={handleClick}>Новый расcчет</E.Button>
  );
};