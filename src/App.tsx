import React, {useState} from 'react';
import './App.css';
import {Counter} from './CounterTable/Counter';
import {CounterSettings} from './CounterSettings/CounterSettings';
import {restoreState, saveState} from './common/localStorage';

type ValueType = {
    min: number
    max: number
}

function App() {
    let [currentValue, setCurrentValue] = useState<number>(0)

    const state: ValueType = restoreState<ValueType>('value', {min: 0, max: 5});

    let [min, setMin] = useState<number>(state.min)
    let [max, setMax] = useState<number>(state.max)

    let [helpMessage, setHelpMessage] = useState<string>('')

    function saveToStorage() {
        saveState<ValueType>('value', {min: min, max: max});
    };

    function increaseNumberCallback() {
        let plusValue = currentValue += 1
        setCurrentValue(plusValue)
    }

    function resetNumberCallback() {
        setCurrentValue(min)
    }

    function changeMaxValue(value: number) {
        setMax(value)
        if (value <= min) {
            setHelpMessage('incorrect value')
        } else {
            setHelpMessage(`enter values and press 'set'`)
        }
    }

    function changeMinValue(value: number) {
        setMin(value)
        if (value < 0 || value > max || value === max) {
            setHelpMessage('incorrect value')
        } else {
            setHelpMessage(`enter values and press 'set'`)
        }
    }

    function setValue() {
        saveToStorage()
        setCurrentValue(min)
        setHelpMessage('')
    }

    return (
        <div className='App'>
            <CounterSettings minNum={min}
                             maxNum={max}
                             setValue={setValue}
                             helpMessage={helpMessage}
                             changeMaxValue={changeMaxValue}
                             changeMinValue={changeMinValue}
            />
            <Counter minNum={min}
                     maxNum={max}
                     helpMessage={helpMessage}
                     currentValue={currentValue}
                     resetNumberCallback={resetNumberCallback}
                     increaseNumberCallback={increaseNumberCallback}
            />
        </div>
    )
}

export default App;
