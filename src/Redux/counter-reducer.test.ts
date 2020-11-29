import {counterReducer, InitialStateType} from './counter-reducer';
import {actions} from './actions';

test('check increasing number in counter display', () => {

   const startState: InitialStateType = {
      minValue: 0,
      maxValue: 10,
      currentValue: 0,
      helpMessage: '',
   };

   const endState = counterReducer(startState, actions.IncreaseNumberAC())

   expect(endState.currentValue).toBe(1)
});

test('check reset number to min set value in display', () => {

   const startState: InitialStateType = {
      minValue: 2,
      maxValue: 10,
      currentValue: 5,
      helpMessage: '',
   };

   const endState = counterReducer(startState, actions.ResetNumberAC())

   expect(endState.currentValue).toBe(2)
});

test('set selected min max value in display setting', () => {

   const startState: InitialStateType = {
      minValue: 2,
      maxValue: 10,
      currentValue: 5,
      helpMessage: 'This have to be empty',
   };

   const endState = counterReducer(startState, actions.SetValueAC())

   expect(endState.helpMessage).toBe('')
});

test('set selected max value in display setting input', () => {

   const startState: InitialStateType = {
      minValue: 0,
      maxValue: 5,
      currentValue: 4,
      helpMessage: 'Set value and press set',
   };

   const endState = counterReducer(startState, actions.SetMaxValueAC(10))

   expect(endState.maxValue).toBe(10)
   expect(endState.minValue).toBe(0)
   expect(endState.helpMessage).toBe(`enter values and press 'set'`)
});

test(`check 'incorrect' message if max number wrong`, () => {

   const startState: InitialStateType = {
      minValue: 5,
      maxValue: 10,
      currentValue: 4,
      helpMessage: 'Set value and press set',
   };

   const endState = counterReducer(startState, actions.SetMaxValueAC(5))

   expect(endState.maxValue).toBe(5)
   expect(endState.minValue).toBe(5)
   expect(endState.helpMessage).toBe('incorrect value')
});

test('set selected min value in display setting input', () => {

   const startState: InitialStateType = {
      minValue: 5,
      maxValue: 6,
      currentValue: 4,
      helpMessage: '',
   };

   const endState = counterReducer(startState, actions.SetMinValueAC(2))

   expect(endState.maxValue).toBe(6)
   expect(endState.minValue).toBe(2)
   expect(endState.currentValue).toBe(4)
   expect(endState.helpMessage).toBe(`enter values and press 'set'`)
});

test(`check 'incorrect' message if min number wrong`, () => {

   const startState: InitialStateType = {
      minValue: 1,
      maxValue: 5,
      currentValue: 4,
      helpMessage: 'Set value and press set',
   };

   const endState = counterReducer(startState, actions.SetMinValueAC(5))

   expect(endState.maxValue).toBe(5)
   expect(endState.minValue).toBe(5)
   expect(endState.helpMessage).toBe('incorrect value')
});