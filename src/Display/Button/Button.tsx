import React from 'react';
import './Button.css'


export function Button(props: DisplayPropsType) {


    return (
        <button className='inc_button' onClick={incNumber}
                disabled={props.currentNumb >= 5 ? true : false}>inc
        </button>
    )
}