import {CounterInitType, counterReducer} from './counter-reducer';
import {IncreaseNumberAC, ResetNumberAC} from './actions';

test('check increase number', () => {

    const startState: CounterInitType = {
        minValue: 0,
        maxValue: 10,
        currentValue: 0,
        helpMessage: '',
    };

    const endState = counterReducer(startState, IncreaseNumberAC())

    expect(endState.currentValue).toBe(1)
});

test('check reset number', () => {

    const startState: CounterInitType = {
        minValue: 2,
        maxValue: 10,
        currentValue: 5,
        helpMessage: '',
    };

    const endState = counterReducer(startState, ResetNumberAC())

    expect(endState.currentValue).toBe(2)
});