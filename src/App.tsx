import React from 'react';
import './App.css';
import {CounterDisplay} from './CounterTable/CounterDispaly';
import {CounterSettings} from './CounterSettings/CounterSettings';

export const App: React.FC = () => {
  return (
    <div className='App'>
      <CounterSettings/>
      <CounterDisplay/>
    </div>
  )
}