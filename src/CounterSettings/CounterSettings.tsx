import React from 'react';
import {SettingsDisplay} from './Display/SettingsDisplay';
import s from './CounterSettings.module.css'
import {Button} from '../common/Button/Button';

type CounterPropsType = {
    maxNum: number
    minNum: number
    helpMessage: string
    setValue: () => void
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
}

export const CounterSettings: React.FC<CounterPropsType> = (props) => {

    const setToggle = props.helpMessage.includes('incorrect') || props.helpMessage.length === 0

    return (
        <div className={s.main_container}>
            <SettingsDisplay maxNum={props.maxNum}
                             minNum={props.minNum}
                             helpMessage={props.helpMessage}
                             changeMaxValue={props.changeMaxValue}
                             changeMinValue={props.changeMinValue}
            />
            <div className={s.button_wrapper}>
                <Button callback={props.setValue}
                        title={'set'}
                        toggle={setToggle}
                />
            </div>
        </div>
    )
}

