import React from 'react';
import {SettingsDisplay} from './Display/SettingsDisplay';
import s from './CounterSettings.module.css'
import {Button} from '../common/Button/Button';
import {IGlobalState} from '../Redux/state';
import {compose, Dispatch} from 'redux';
import {
    CounterReducersTypes,
    SetMaxValueAC,
    SetMinValueAC,
    SetValueAC
} from '../Redux/actions';
import {connect} from 'react-redux';
import {CounterInitType} from '../Redux/counter-reducer';


interface ICounterProps extends CounterInitType {
    setValue: (minValue: number, helpMessage: string) => void;
    setMaxValue: (inputValue: number) => void;
    setMinValue: (inputValue: number) => void;
}

export const CounterSettings: React.FC<ICounterProps> = ({setValue, setMaxValue, setMinValue, minValue, maxValue, helpMessage}) => {

    return (
        <div className={s.main_container}>
            <SettingsDisplay maxNum={maxValue}
                             minNum={minValue}
                             helpMessage={helpMessage.includes('incorrect')}
                             changeMaxValue={setMaxValue}
                             changeMinValue={setMinValue}
            />
            <div className={s.button_wrapper}>
                <Button callback={() => setValue} //error
                        title={'set'}
                        disabled={helpMessage.length != 0}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state: IGlobalState) => {
    return {
        minValue: state.counter.minValue,
        maxValue: state.counter.maxValue,
        helpMessage: state.counter.helpMessage,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<CounterReducersTypes>) => {
    return {
        setValue(minValue: number, helpMessage: string) {
            dispatch(SetValueAC(minValue, helpMessage));
        },
        setMaxValue(inputValue: number) {
            dispatch(SetMaxValueAC(inputValue));
        },
        setMinValue(inputValue: number) {
            dispatch(SetMinValueAC(inputValue));
        },
    };
};

export const CounterSettingContainer = compose(connect(mapStateToProps, mapDispatchToProps)(CounterSettings));

