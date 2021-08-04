import React, { useState } from 'react';
import useInput from '../Hooks/use-input';
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid:enteredNameIsValid,
    hashError: nameInputHashError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset:resetNameInput
  } = useInput(value=> value.trim() !== '');

  const {
    value: enteredEmail,
    isValid:enteredEmailIsValid,
    hashError: emailInputHashError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset:resetEmailInput
  } = useInput(value=> value.includes('@'));
  
  
  
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  else {
    formIsValid = false;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    
     if (emailInputHashError && nameInputHashError) {
      return;
    }
    resetNameInput();
    resetEmailInput();
    
    console.log(enteredName, enteredEmail);
  }

  console.log(formIsValid)
  const nameInputClasses = nameInputHashError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHashError ? 'form-control invalid' : 'form-control';
  
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
      </div>
      {nameInputHashError && <p className="error-text" >Name not must be empty</p>}

      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      {emailInputHashError && <p className="error-text" >Enter valid Email</p>}
      <div className="form-actions">
        <button disabled={!formIsValid} type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
