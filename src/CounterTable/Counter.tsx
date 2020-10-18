import React, {useState} from 'react';
import {Display} from './Display/Display';
import {Button} from '../common/Button/Button';
import s from './Counter.module.css'

type CounterPropsType = {
    minNum: number
    maxNum: number
    helpMessage: string
    currentValue: number
    resetNumberCallback: () => void
    increaseNumberCallback: () => void
}

export const Counter: React.FC<CounterPropsType> = ({minNum, maxNum, helpMessage, currentValue, resetNumberCallback, increaseNumberCallback}) => {

    return (
        <div className={s.main_container}>
            <Display currentValue={currentValue}
                     helpMessage={helpMessage}
                     maxNum={maxNum}
            />
            <div className={s.button_wrapper}>
                <Button callback={increaseNumberCallback}
                        title={'start'}
                        disabled={helpMessage || currentValue === maxNum ? true : false}/>
                <Button callback={resetNumberCallback}
                        title={'reset'}
                        disabled={helpMessage || currentValue === minNum ? true : false}/>
            </div>
        </div>
    )
}

