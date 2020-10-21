import { ACTIONS_TYPE, CounterReducersTypes } from './actions';

export type CounterInitStateType = {
    minValue: number
    maxValue: number
    currentValue: number
    helpMessage: string
};

type ValueType = {
    minValue: number
    maxValue: number
}

export const initialState: CounterInitStateType = {
    minValue: 0,
    maxValue: 5,
    currentValue: 0,
    helpMessage: '',
};

export const counterReducer = (state: CounterInitStateType = initialState, action: CounterReducersTypes): CounterInitStateType => {
    switch (action.type) {
        //CounterDisplay
        case ACTIONS_TYPE.RESET_NUMBER: {
            return { ...state, currentValue: state.minValue }
        }
        case ACTIONS_TYPE.INCREASE_NUMBER: {
            return { ...state, currentValue: state.currentValue + 1 }
        }
        //CounterSettings
        case ACTIONS_TYPE.SET_MAX_VALUE: {
            let copyState = { ...state }
            let max = action.payload.inputValue 
            if (max <= copyState.minValue || copyState.minValue < 0) {
                copyState.helpMessage = 'incorrect value'
                copyState.maxValue = max
            } else {
                copyState.helpMessage = `enter values and press 'set'`
                copyState.maxValue = max
            }
            return copyState
        }
        case ACTIONS_TYPE.SET_MIN_VALUE: {
            let copyState = { ...state } 
            let min = action.payload.inputValue 
            if (min >= copyState.maxValue || min < 0) {
                copyState.helpMessage = 'incorrect value'
                copyState.minValue = min
            } else {
                copyState.helpMessage = `enter values and press 'set'`
                copyState.minValue = min
            }
            return copyState
        }
        case ACTIONS_TYPE.SET_VALUE: {
            return {
                ...state,
                currentValue: state.currentValue = state.minValue,
                helpMessage: state.helpMessage = ''
            }
        }
        default:
            return state;
    }
};
