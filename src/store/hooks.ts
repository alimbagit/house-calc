import { CalcState } from 'models'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { CalcDispatch } from './index'

export const useCalcDispatch = () => useDispatch<CalcDispatch>()
export const useCalcSelector: TypedUseSelectorHook<CalcState> = useSelector