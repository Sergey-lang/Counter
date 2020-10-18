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

    const state: ValueType = restoreState<ValueType>('value', {min: 0, max: 5});

    let [min, setMin] = useState<number>(state.min)
    let [max, setMax] = useState<number>(state.max)
    let [currentValue, setCurrentValue] = useState<number>(min)


    let [helpMessage, setHelpMessage] = useState<string>('')

    function saveToStorage() {
        saveState<ValueType>('value', {min: min, max: max});
    };

    //Display
    function increaseNumber() {
        let plusValue = currentValue +1
        setCurrentValue(plusValue)
    }
    function resetNumber() {
        setCurrentValue(min)
    }

    //Settings
    function setMaxValue(value: number) {
        setMax(value)
        if (value <= min || min < 0) {
            setHelpMessage('incorrect value')
        } else {
            setHelpMessage(`enter values and press 'set'`)
        }
    }
    function setMinValue(value: number) {
        setMin(value)
        if (value < 0 || value >= max) {
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
                             helpMessage={helpMessage.includes('incorrect')}
                             setValue={setValue}
                             changeMaxValue={setMaxValue}
                             changeMinValue={setMinValue}
            />
            <Counter minNum={min}
                     maxNum={max}
                     helpMessage={helpMessage}
                     currentValue={currentValue}
                     resetNumberCallback={resetNumber}
                     increaseNumberCallback={increaseNumber}
            />
        </div>
    )
}

export default App;
