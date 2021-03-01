import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { CalcState, ResponseDataCalc } from "models";
import { loadDataFromCalc } from 'services';

/**Начальные значения состояния приложения */
const initialState: CalcState = {
  buildingIndex: 1,
  materialIndex: 1,
  sizeX: NaN,
  sizeY: NaN,
  step: 1,
  height: NaN,
  result: { message: "", result: "" }
}

/**Отправляет зарос на рассчет стоимости здания */
export const loadDataCalc = createAsyncThunk('calc/loadDataCalc',
  async (args, thunkAPI) => {
    const state = thunkAPI.getState() as CalcState;
    const response = await loadDataFromCalc(state);
    return response;
  },
)

export const calcSlice = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    /**Увеличивает шаг */
    nextStep: state => {
      state.step += 1
    },
    /**Сбрасывает состояние приложения */
    reset: state => {
      state.step = initialState.step;
      state.buildingIndex=initialState.buildingIndex;
      state.materialIndex=initialState.materialIndex;
      state.height=initialState.height;
      state.sizeX=initialState.sizeX;
      state.sizeY=initialState.sizeY;
      state.result=initialState.result;
    },
    /**Устанавливает размеры здания */
    changeSizes: (state, action: PayloadAction<{ sizeX: number; sizeY: number }>) => {
      state.sizeX = action.payload.sizeX;
      state.sizeY = action.payload.sizeY;
    },
    /**Устанавливает тип материала */
    changeMaterial: (state, action: PayloadAction<number>) => {
      state.materialIndex = action.payload;
    },
    /**Устанавливает тип здания */
    changeBuilding: (state, action: PayloadAction<number>) => {
      state.buildingIndex = action.payload;
    },
    /**Усатнавливает количество этажей */
    changeHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(loadDataCalc.fulfilled, (state, action: PayloadAction<ResponseDataCalc>) => {
      state.step += 1;
      state.result = action.payload
    })
  }
})

export const { changeBuilding, changeMaterial, changeSizes, nextStep, reset, changeHeight } = calcSlice.actions

export default calcSlice.reducer