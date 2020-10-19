import React from 'react';
import {Display} from './Display/Display';
import {Button} from '../common/Button/Button';
import s from './Counter.module.css'
import {connect} from 'react-redux';
import {IGlobalState} from '../Redux/state';
import {Dispatch} from 'redux';
import {CounterReducersTypes, IncreaseNumberAC, ResetNumberAC,} from '../Redux/actions';


type PropsType = MapStateType & MapDispatchType
export const Counter: React.FC<PropsType> = ({minValue, maxValue, helpMessage, currentValue, resetNumber, increaseNumber}) => {

    return (
        <div className={s.main_container}>
            <Display currentValue={currentValue}
                     helpMessage={helpMessage}
                     maxNum={maxValue}
            />
            <div className={s.button_wrapper}>
                <Button callback={increaseNumber}
                        title={'start'}
                        disabled={helpMessage || currentValue === maxValue ? true : false}/>
                <Button callback={resetNumber}
                        title={'reset'}
                        disabled={helpMessage || currentValue === minValue ? true : false}/>
            </div>
        </div>
    )
}

type MapStateType = {
    minValue: number
    maxValue: number
    helpMessage: string
    currentValue: number
}

type MapDispatchType = {
    increaseNumber: () => void
    resetNumber: () => void
}

const mapStateToProps = (state: IGlobalState): MapStateType => {
    return {
        minValue: state.counter.minValue,
        maxValue: state.counter.maxValue,
        helpMessage: state.counter.helpMessage,
        currentValue: state.counter.currentValue
    };
};

const mapDispatchToProps = (dispatch: Dispatch<CounterReducersTypes>):MapDispatchType => {
    return {
        increaseNumber() {
            dispatch(IncreaseNumberAC());
        },
        resetNumber() {
            dispatch(ResetNumberAC());
        },
    };
};

export const CounterContainer = connect<MapStateType, MapDispatchType, {}, IGlobalState>(mapStateToProps, mapDispatchToProps)(Counter);


