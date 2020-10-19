import React from 'react';
import {SettingsDisplay} from './Display/SettingsDisplay';
import s from './CounterSettings.module.css'
import {Button} from '../common/Button/Button';
import {IGlobalState} from '../Redux/state';
import {Dispatch} from 'redux';
import {CounterReducersTypes, SetMaxValueAC, SetMinValueAC, SetValueAC} from '../Redux/actions';
import {connect} from 'react-redux';


type PropsType = MapDispatchType & MapStateType
export const CounterSettings: React.FC<PropsType> = ({setValue, setMaxValue, setMinValue, minValue, maxValue, helpMessage}) => {

    return (
        <div className={s.main_container}>
            <SettingsDisplay maxNum={maxValue}
                             minNum={minValue}
                             helpMessage={helpMessage.includes('incorrect')}
                             changeMaxValue={setMaxValue}
                             changeMinValue={setMinValue}
            />
            <div className={s.button_wrapper}>
                <Button callback={setValue}
                        title={'set'}
                        disabled={helpMessage.length === 0}
                />
            </div>
        </div>
    )
}

type MapStateType = {
    minValue: number
    maxValue: number,
    helpMessage: string,
}

type MapDispatchType = {
    setValue: () => void
    setMaxValue: (inputValue: number) => void
    setMinValue: (inputValue: number) => void
}

const mapStateToProps = (state: IGlobalState): MapStateType => {
    return {
        minValue: state.counter.minValue,
        maxValue: state.counter.maxValue,
        helpMessage: state.counter.helpMessage,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<CounterReducersTypes>): MapDispatchType => {
    return {
        setValue() {
            dispatch(SetValueAC());
        },
        setMaxValue(inputValue: number) {
            dispatch(SetMaxValueAC(inputValue));
        },
        setMinValue(inputValue: number) {
            dispatch(SetMinValueAC(inputValue));
        },
    };
};

export const CounterSettingContainer = connect<MapStateType, MapDispatchType, {}, IGlobalState>(mapStateToProps, mapDispatchToProps)(CounterSettings);

