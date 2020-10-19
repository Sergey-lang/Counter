import React from 'react';
import './App.css';
import {CounterContainer} from './CounterTable/Counter';
import {CounterSettingContainer} from './CounterSettings/CounterSettings';

type ValueType = {
    min: number
    max: number
}

export const App: React.FC = () => {

    // const state: ValueType = restoreState<ValueType>('value', {min: 0, max: 5});
    //
    // let [min, setMin] = useState<number>(state.min)
    // let [max, setMax] = useState<number>(state.max)
    // let [currentValue, setCurrentValue] = useState<number>(min)
    //
    //
    // let [helpMessage, setHelpMessage] = useState<string>('')
    //
    // function saveToStorage() {
    //     saveState<ValueType>('value', {min: min, max: max});
    // };
    //
    //
    // function increaseNumber() {
    //     let plusValue = currentValue +1
    //     setCurrentValue(plusValue)
    // }
    // function resetNumber() {
    //     setCurrentValue(min)
    // } //completed
    //
    //
    // function setMaxValue(value: number) {
    //     setMax(value)
    //     if (value <= min || min < 0) {
    //         setHelpMessage('incorrect value')
    //     } else {
    //         setHelpMessage(`enter values and press 'set'`)
    //     }
    // }
    // function setMinValue(value: number) {
    //     setMin(value)
    //     if (value < 0 || value >= max) {
    //         setHelpMessage('incorrect value')
    //     } else {
    //         setHelpMessage(`enter values and press 'set'`)
    //     }
    // }
    // function setValue() {
    //     saveToStorage()
    //     setCurrentValue(min)
    //     setHelpMessage('')
    // }

    return (
        <div className='App'>
            <CounterSettingContainer/>
            <CounterContainer/>
        </div>
    )
}
