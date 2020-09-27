import React from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
    maxNum: number
    helpMessage: string
    currentValue: number
}

export function Display(props: DisplayPropsType) {

    const displayMessageClass = props.helpMessage.includes('incorrect')
        ? `${s.error} ${s.simple_number}`
        : `${s.help_message} ${s.simple_number}`

    const spanClass = props.currentValue === props.maxNum
        ? `${s.end_number} ${s.simple_number}`
        : s.simple_number

    return (
        <div className={s.counter_wrapper}>
            {props.helpMessage.length != 0
                ? <p className={displayMessageClass}>{props.helpMessage}</p>
                : <span className={spanClass}>
                    {props.currentValue}</span>
            }
        </div>
    )
}