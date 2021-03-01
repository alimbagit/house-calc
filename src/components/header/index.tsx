import React from "react";
import * as E from './elements'

interface IHeader {
  subtitle: string;
}

const Header = ({ subtitle }: IHeader) => {

  return (
    <E.Wrapper>
      <E.HeaderText>Калькулятор цены конструкций</E.HeaderText>
      <E.Subtitle>{subtitle}</E.Subtitle>
    </E.Wrapper>
  );
};

export default Header;
