import { configureStore } from '@reduxjs/toolkit'
import calcReducer from './reducer';

const store = configureStore({
  reducer: calcReducer
});

export type CalcDispatch = typeof store.dispatch
export default store;