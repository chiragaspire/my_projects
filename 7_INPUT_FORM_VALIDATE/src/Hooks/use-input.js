import React, { useState, useReducer } from 'react';

const initialState = {
    value: '',
    isTouched:false
}
const inputStateReducer = (state,action) => {
    if (action.type === 'INPUT') {
        return {
            value: action.value,
            isTouched:state.isTouched
        }
    }
    if (action.type === 'BLUR') {
        return {
            value: state.value,
            isTouched:true
        }
    }
    if (action.type === 'RESET') {
        return {
            value: '',
            istouched:false
        }
    }
    return {
        value: '',
        isTouched: false
    }
}

const useInput = (validateValue) => {
    const [inputState, dispatch]=useReducer(inputStateReducer,initialState)

    const valueIsValid = validateValue(inputState.value);
    const hashError = !valueIsValid && inputState.isTouched;
    
    const valueChangeHandler = (e) => {
        dispatch({type:'INPUT', value:e.target.value})
        
      }
    const inputBlurHandler = (e) => {
        dispatch({type:'BLUR'})
        
    }
    
    const reset = () => {
        dispatch({type:'RESET'})
        
      }
    return {
        value: inputState.value,
        isValid:valueIsValid,
        hashError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}
export default useInput;