import React from 'react';
import { SettingsDisplay } from './Display/SettingsDisplay';
import s from './CounterSettings.module.css'
import { Button } from '../common/Button/Button';
import { rootState } from '../Redux/state';
import { useDispatch, useSelector } from 'react-redux';
import { CounterInitStateType } from '../Redux/counter-reducer'
import { SetMaxValueAC, SetMinValueAC, SetValueAC } from '../Redux/actions';

export const CounterSettings: React.FC = () => {

    const dispatch = useDispatch()

    const counter = useSelector<rootState, CounterInitStateType>(state => state.counter)

    let setValue = () => dispatch(SetValueAC());
    let setMaxValue = (inputValue: number) => dispatch(SetMaxValueAC(inputValue))
    let setMinValue = (inputValue: number) => dispatch(SetMinValueAC(inputValue));

    // {
    //     type StateType = {
    //         min: number
    //         max: number
    //     }

    //     let state: StateType = {
    //         min: counter.minValue,
    //         max: counter.maxValue
    //     }

    //     function saveState<T>(key: string, state: T) {
    //         const stateAsString = JSON.stringify(state);
    //         localStorage.setItem(key, stateAsString)
    //     }
    //     saveState<StateType>("start value", { min: 5, max: 0 });

    //     function restoreState<T>(key: string, defaultState: T) {
    //         const stateAsString = localStorage.getItem(key);
    //         if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    //         return defaultState;
    //     }
    //     const minMaxValue = restoreState("start value", { x: 5, y: 0 });
    // }

    return (
        <div className={s.main_container}>
            <SettingsDisplay maxNum={counter.maxValue}
                minNum={counter.minValue}
                helpMessage={counter.helpMessage.includes('incorrect')}
                changeMaxValue={setMaxValue}
                changeMinValue={setMinValue}
            />
            <div className={s.button_wrapper}>
                <Button callback={setValue}
                    title={'set'}
                    disabled={counter.helpMessage.length === 0
                        || counter.helpMessage.includes('incorrect')}
                />
            </div>
        </div>
    )
}


