import React from 'react';
import {SettingsDisplay} from './Display/SettingsDisplay';
import s from './CounterSettings.module.css'
import {Button} from '../common/Button/Button';

type CounterPropsType = {
    maxNum: number
    minNum: number
    helpMessage: boolean
    setValue: () => void
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
}

export const CounterSettings: React.FC<CounterPropsType> = (props) => {

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
                        disabled={props.helpMessage}
                />
            </div>
        </div>
    )
}

