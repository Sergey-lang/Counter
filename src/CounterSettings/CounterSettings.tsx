import React, {useEffect} from 'react';
import {SettingsDisplay} from './Display/SettingsDisplay';
import s from './CounterSettings.module.css'
import {Button} from '../common/Button/Button';
import {rootState} from '../Redux/state';
import {useSelector} from 'react-redux';
import {InitialStateType} from '../Redux/counter-reducer'
import {SetMaxValueAC, SetMinValueAC, SetValueAC, useDispatch} from '../Redux/actions';

export const CounterSettings: React.FC = () => {

  const dispatch = useDispatch()

  const counter = useSelector<rootState, InitialStateType>(state => state.counter)
//тип для local storage
  type StateType = {
    min: number
    max: number
  }
  let state: StateType = {
    min: counter.minValue,
    max: counter.maxValue
  }

  useEffect(() => {
    function saveState<T>(key: string, state: T) {
      const stateAsString = JSON.stringify(state);
      localStorage.setItem(key, stateAsString)
    }

    saveState<StateType>('start value', {min: state.min, max: state.max})
  }, [counter.minValue, counter.maxValue])

  let setValue = () => dispatch(SetValueAC());
  let setMaxValue = (inputValue: number) => dispatch(SetMaxValueAC(inputValue))
  let setMinValue = (inputValue: number) => dispatch(SetMinValueAC(inputValue));

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


