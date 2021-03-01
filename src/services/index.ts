import { CalcState, ResponseDataCalc } from "models";

/**Отправляет запрос на сервер и возвращает полученные расчеты */
export const loadDataFromCalc = async (arg: CalcState) => {
  const { buildingIndex: building, materialIndex: material, sizeX: sizex, sizeY: sizey, height } = arg
  let url = new URL("https://data.techart.ru/lab/json/");
  url.searchParams.set("building", building.toString());
  url.searchParams.set("height", height.toString());
  url.searchParams.set("material", material.toString());
  url.searchParams.set("sizex", sizex.toString());
  url.searchParams.set("sizey", sizey.toString());

  const response = await fetch(url.toString());
  const responseResult = await response.json();
  return responseResult as ResponseDataCalc;
};