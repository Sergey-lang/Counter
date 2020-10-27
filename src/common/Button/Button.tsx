import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
  callback: () => void
  title: string
  disabled: boolean
}

export const ButtonComponent: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
  console.log('Button Component rerender')
  return (
    <div className={s.button_wrapper}>
      <button className={props.disabled ? `${s.disabled} ${s.button}` : s.button}
              onClick={props.callback}
              disabled={props.disabled}>
        {props.title}
      </button>
    </div>
  )
}

export const Button = React.memo(ButtonComponent)

