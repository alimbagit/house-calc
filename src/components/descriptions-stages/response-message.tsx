import React from "react";
import { useCalcSelector } from "store/hooks";
import * as E from './elements'

/**Компонент для отображения результатов запроса на рассчет */
export const ResponseMessage = () => {
  const valueResult = useCalcSelector(state => state.result);

  return (
    <E.Wrapper>
      {valueResult.result == "ok" ? <E.Description>Успешно</E.Description>
        : <E.Description>Ошибка:</E.Description>}
      <E.Description>{valueResult.message}</E.Description>
    </E.Wrapper>
  );
};
