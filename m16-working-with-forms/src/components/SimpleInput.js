import React, { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [ enteredName, setEnteredName ] = useState('');
  const [ enteredNameIsValid, setEnteredNameIsValid ] = useState(false);
  const [ enteredNameTouched, setEnteredNameTouched ] = useState(false);

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

  };

  // This is the way in getting the user input in useState
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  // this wll run submit button is click
  const submitFormHandler = (event) => {
    event.preventDefault();

    //  This will assign true if user submitted with/without anything inputed.
    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    // This indicate that the input is valid
    setEnteredNameIsValid(true);

    // This is for the use state
    console.log(enteredName);

    // We assign the value from useRef state
    const enteredNameRef = nameInputRef.current.value;

    console.log(enteredNameRef);

    // This is a two way binding
    setEnteredName('');
  };

  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          ref={nameInputRef}
          value={enteredName}
        />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
