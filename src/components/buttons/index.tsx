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
    <button onClick={handleClick}>Далее</button>
  );
};

/**Кнопка сброса состояния приложения */
export const ButtonCancel = () => {
  const dispatch = useCalcDispatch();
  const handleClick = () => {
    dispatch(reset());
  }

  return (
    <button onClick={handleClick}>Отмена</button>
  );
};

/**Кнопка рссчета */
export const ButtonCalc = () => {
  const dispatch = useCalcDispatch();
  const handleClick = () => {
    dispatch(loadDataCalc());
  }

  return (
    <button onClick={handleClick}>Рассчитать</button>
  );
};

/**Кнопка "новый рассчет"*/
export const ButtonNewCalc = () => {
  const dispatch = useCalcDispatch();
  const handleClick = () => {
    dispatch(reset());
  }
  return (
    <button onClick={handleClick}>Новый расcчет</button>
  );
};