import {useDispatch as _useDispatch} from 'react-redux';
import {InferActionsTypes} from './store';

export type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
   IncreaseNumberAC: () => ({type: 'COUNTER/INCREASE_NUMBER'} as const),
   ResetNumberAC: () => ({type: 'COUNTER/RESET_NUMBER'} as const),
   SetValueAC: () => ({type: 'COUNTER/SET_VALUE'} as const),
   SetMaxValueAC: (inputValue: number) => ({type: 'COUNTER/SET_MAX_VALUE', inputValue} as const),
   SetMinValueAC: (inputValue: number) => ({type: 'COUNTER/SET_MIN_VALUE', inputValue} as const),
   SaveSetValueToStorageAC: (inputValue: number) => ({type: 'COUNTER/SET_MIN_VALUE', inputValue} as const)
}

export function useDispatch() {
   const dispatch = _useDispatch();
   return (ac: ActionsTypes) => dispatch(ac)
}