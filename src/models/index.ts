export const buildingTypes = ["Жилой дом", "Гараж"];
export const materialTypes = ["Кирпич", "Шлакоблок", "Деревянный брус", "Металл", "Сендвич-панели"];

export interface CalcState {
    height:number;
    step: number;
    buildingIndex: number;
    materialIndex: number;
    sizeX: number;
    sizeY: number;
    result:ResponseDataCalc;
}

export interface ResponseDataCalc {
    result: string;
    message: string;
}