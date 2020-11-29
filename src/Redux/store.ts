import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';

const reducers = combineReducers({
   counter: counterReducer,
});

export type rootState = ReturnType<typeof reducers>;
export const store = createStore(reducers);

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

//@ts-ignore
window.store = store
