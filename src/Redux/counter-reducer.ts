import {ACTIONS_TYPE, CounterReducersTypes} from './actions';

export type CounterInitType = {
    minValue: number
    maxValue: number
    currentValue: number
    helpMessage: string
};

const initialState: CounterInitType = {
    minValue: 0,
    maxValue: 5,
    currentValue: 0,
    helpMessage: '',
};

export const counterReducer = (state: CounterInitType = initialState, action: CounterReducersTypes): CounterInitType => {
    switch (action.type) {

        //CounterDisplay
        case ACTIONS_TYPE.RESET_NUMBER: {
            return{...state, currentValue: state.minValue}
        }
        case ACTIONS_TYPE.INCREASE_NUMBER:{
            return{...state,currentValue: state.currentValue +1}
        }

        //CounterSettings
        case ACTIONS_TYPE.SET_MAX_VALUE:{
            return{...state, maxValue: action.payload.inputValue}
        }
        case ACTIONS_TYPE.SET_MIN_VALUE:{
            return{...state, minValue: action.payload.inputValue}
        }
        default:
            return state;
    }
};
