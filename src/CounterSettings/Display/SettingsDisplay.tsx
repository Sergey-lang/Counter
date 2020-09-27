import React, {ChangeEvent, useState} from 'react';
import s from './SettingsDisplay.module.css'

type DisplayPropsType = {
    maxNum: number
    minNum: number
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
}

export const SettingsDisplay: React.FC<DisplayPropsType> = (props) => {

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
                />
            </div>
            <div className={s.number}>
                <h4>min value:</h4>
                <input type="number"
                       value={props.minNum}
                       onChange={onChangeMinHandler}
                />
            </div>
        </div>
    )
}