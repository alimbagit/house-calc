import React from "react";
import * as E from "./elements";

interface ILayout {
  header: JSX.Element;
  middle: JSX.Element;
  footer: JSX.Element;
}

/**Шаблон экрана для каждого шага */
const LayoutStage = ({ footer, header, middle }: ILayout) => {
  return (

    <E.Wrapper>
      <E.Header>
        {header}
      </E.Header>
      <E.Middle>
        {middle}
      </E.Middle>
      <E.Footer>
        {footer}
      </E.Footer>
    </E.Wrapper>
  );
};

export default LayoutStage;
