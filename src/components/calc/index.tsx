import { ButtonCalc, ButtonCancel, ButtonNext, ButtonNewCalc } from "components/buttons";
import Header from "components/header";
import { TypeBuilding, HeightBuilding, TypeMaterial, Sizes, ResponseMessage } from "components/descriptions-stages";
import LayoutStage from "layout";
import React from "react";
import { useCalcSelector } from "store/hooks";
import * as E from './elements'

const Calc = () => {

  const currentStep = useCalcSelector(state => state.step)
  const currentBuildingIndex = useCalcSelector(state => state.buildingIndex)

  return (
    <E.Wrapper>
      {currentStep === 1 && <LayoutStage
        key={1}
        footer={<><ButtonCancel /> <ButtonNext /></>}
        header={<Header subtitle={"Шаг 1"} />}
        middle={<TypeBuilding />}
      />}
      {currentStep === 2 && <LayoutStage
        key={2}
        footer={<><ButtonCancel /> <ButtonNext /></>}
        header={<Header subtitle={"Шаг 2"} />}
        middle={<HeightBuilding />}
      />}
      {currentStep === 3 && <LayoutStage
        key={3}
        footer={<><ButtonCancel /><ButtonNext /></>}
        header={<Header subtitle={"Шаг 3"} />}
        middle={<TypeMaterial />}
      />}
      {currentStep === 4 && <LayoutStage
        key={4}
        footer={<><ButtonCancel /> <ButtonCalc /></>}
        header={<Header subtitle={"Шаг 4"} />}
        middle={<Sizes />}
      />}
      {currentStep === 5 && <LayoutStage
        key={5}
        footer={<ButtonNewCalc />}
        header={<Header subtitle={"Результат рассчета"} />}
        middle={<ResponseMessage />}
      />}
    </E.Wrapper>
  );
};

export default Calc;
