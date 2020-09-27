import React, {ChangeEvent, useState} from 'react';
import s from './SettingsDisplay.module.css'

type DisplayPropsType = {
    maxNum: number
    minNum: number
    helpMessage: string
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
}

export const SettingsDisplay: React.FC<DisplayPropsType> = (props) => {

    const inputErrorClass = props.helpMessage.includes('incorrect')

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(Number(e.currentTarget.value))
    }
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMinValue(Number(e.currentTarget.value))
    }
    return (
        <div className={s.counter_wrapper}>
            <div className={s.number}>
                <h4>max value:</h4>
                <input type="number"
                       value={props.maxNum}
                       onChange={onChangeMaxHandler}
                       className={inputErrorClass? `${s.error} ${s.input}`: s.input}
                />
            </div>
            <div className={s.number}>
                <h4>min value:</h4>
                <input type="number"
                       value={props.minNum}
                       onChange={onChangeMinHandler}
                       className={inputErrorClass? `${s.error} ${s.input}`: s.input}
                />
            </div>
        </div>
    )
}