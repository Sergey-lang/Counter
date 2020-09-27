import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    callback: () => void
    title: string
    toggle: boolean
}

export const Button: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
    return (
        <div className={s.button_wrapper}>
            <button className={props.toggle ? `${s.disabled} ${s.button}` : s.button}
                    onClick={props.callback}
                    disabled={props.toggle}>
                {props.title}
            </button>
        </div>
    )
}
