import React from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
  maxNum: number
  currentValue: number
  helpMessage: string
}

export const Display: React.FC<DisplayPropsType> =
  ({maxNum, currentValue, helpMessage}) => {

  const displayMessageClass = helpMessage.includes('incorrect')
    ? `${s.error} ${s.simple_number}`
    : `${s.help_message} ${s.simple_number}`

  const spanClass = currentValue === maxNum
    ? `${s.end_number} ${s.simple_number}`
    : s.simple_number

  return (
    <div className={s.counter_wrapper}>
      {helpMessage.length !== 0
        ? <p className={displayMessageClass}>{helpMessage}</p>
        : <span className={spanClass}>
                    {currentValue}</span>
      }
    </div>
  )
}