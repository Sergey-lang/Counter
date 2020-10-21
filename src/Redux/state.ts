import { combineReducers, createStore } from 'redux';
import { counterReducer } from './counter-reducer';

const reducers = combineReducers({
    counter: counterReducer,
});

export type rootState = ReturnType<typeof reducers>;

export const store = createStore(reducers);

//@ts-ignore
window.store = store
