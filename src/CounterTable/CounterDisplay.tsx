import React, {useCallback} from 'react';
import {Display} from './Display/Display';
import {Button} from '../common/Button/Button';
import s from './Counter.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {rootState} from '../Redux/state';
import {IncreaseNumberAC, ResetNumberAC,} from '../Redux/actions';
import {InitialStateType} from '../Redux/counter-reducer'

export const CounterDisplay = React.memo(() => {
  console.log('Counter DisplayComponent rerender')

  const dispatch = useDispatch()

  const counter = useSelector<rootState, InitialStateType>(state => state.counter)

  let increaseNumber = useCallback(() => dispatch(IncreaseNumberAC()), [dispatch]);
  let resetNumber = useCallback(() => dispatch(ResetNumberAC()), [dispatch]);

  return (
    <div className={s.main_container}>
      <Display currentValue={counter.currentValue}
               helpMessage={counter.helpMessage}
               maxNum={counter.maxValue}
      />
      <div className={s.button_wrapper}>
        <Button callback={increaseNumber}
                title={'start'}
                disabled={counter.helpMessage || counter.currentValue === counter.maxValue
                  ? true
                  : false}/>
        <Button callback={resetNumber}
                title={'reset'}
                disabled={counter.helpMessage || counter.currentValue === counter.minValue
                  ? true
                  : false}/>
      </div>
    </div>
  )
})


