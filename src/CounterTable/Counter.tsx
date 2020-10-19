import React from 'react';
import {Display} from './Display/Display';
import {Button} from '../common/Button/Button';
import s from './Counter.module.css'
import {connect} from 'react-redux';
import {IGlobalState} from '../Redux/state';
import {compose, Dispatch} from 'redux';
import {CounterReducersTypes, IncreaseNumberAC, ResetNumberAC,} from '../Redux/actions';
import {CounterInitStateType} from '../Redux/counter-reducer';

interface ICounterProps extends CounterInitStateType {
    increaseNumber: () => void;
    resetNumber: () => void;
}

export const Counter: React.FC<ICounterProps> = ({minValue, maxValue, helpMessage, currentValue, resetNumber, increaseNumber}) => {

    return (
        <div className={s.main_container}>
            <Display currentValue={currentValue}
                     helpMessage={helpMessage}
                     maxNum={maxValue}
            />
            <div className={s.button_wrapper}>
                <Button callback={() => increaseNumber}
                        title={'start'}
                        disabled={helpMessage || currentValue === maxValue ? true : false}/>
                <Button callback={() => resetNumber}
                        title={'reset'}
                        disabled={helpMessage || currentValue === minValue ? true : false}/>
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
        increaseNumber() {
            dispatch(IncreaseNumberAC());
        },
        resetNumber() {
            dispatch(ResetNumberAC());
        },
    };
};

export const CounterContainer = compose(connect(mapStateToProps, mapDispatchToProps)(Counter));


