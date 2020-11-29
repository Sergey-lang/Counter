import React, {useCallback, useEffect} from 'react';
import {SettingsDisplay} from './Display/SettingsDisplay';
import s from './CounterSettings.module.css'
import {Button} from '../common/Button/Button';
import {rootState} from '../Redux/store';
import {useSelector} from 'react-redux';
import {InitialStateType} from '../Redux/counter-reducer'
import {actions, useDispatch} from '../Redux/actions';

export const CounterSettings = React.memo(() => {
   console.log('Counter Configurations rerender')

   const dispatch = useDispatch()

   const counter = useSelector<rootState, InitialStateType>(state => state.counter)

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

   let setValue = useCallback(() => dispatch(actions.SetValueAC()), [dispatch]);
   let setMaxValue = useCallback((inputValue: number) => dispatch(actions.SetMaxValueAC(inputValue)), [dispatch]);
   let setMinValue = useCallback((inputValue: number) => dispatch(actions.SetMinValueAC(inputValue)), [dispatch]);

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
})



