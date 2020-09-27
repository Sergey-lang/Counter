import React, {useState} from 'react';
import './App.css';
import {Counter} from './CounterTable/Counter';
import {CounterSettings} from './CounterSettings/CounterSettings';


function App() {
    let [currentValue, setCurrentValue] = useState<number>(0)

    let [min, setMin] = useState<number>(0)
    let [max, setMax] = useState<number>(5)

    let [helpMessage, setHelpMessage] = useState<string>('')


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
