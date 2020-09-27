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

export const Counter: React.FC<CounterPropsType> = (props) => {

    const minToggle = props.currentValue === props.minNum || props.helpMessage.length != 0
    const maxToggle = props.currentValue >= props.maxNum || props.helpMessage.length != 0

    return (
        <div className={s.main_container}>
            <Display currentValue={props.currentValue}
                     helpMessage={props.helpMessage}
                     maxNum={props.maxNum}
            />
            <div className={s.button_wrapper}>
                <Button callback={props.increaseNumberCallback}
                        title={'start'}
                        toggle={maxToggle}/>
                <Button callback={props.resetNumberCallback}
                        title={'reset'}
                        toggle={minToggle}/>
            </div>
        </div>
    )
}

