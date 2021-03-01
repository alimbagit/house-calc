import React from "react";
import { useCalcSelector } from "store/hooks";
import * as E from './elements'

/**Компонент для отображения результатов запроса на рассчет */
export const ResponseMessage = () => {
  const valueResult = useCalcSelector(state => state.result);

  return (
    <E.Wrapper>
      {valueResult.result == "ok" ? <> <E.Description>Успешно</E.Description>
        <E.ResponseMessage>{valueResult.message}</E.ResponseMessage></>
        : <><E.Description>Ошибка:</E.Description>
          <E.ResponseMessage style={{ color: '#DC143C' }}>{valueResult.message}</E.ResponseMessage>
        </>}

    </E.Wrapper>
  );
};
