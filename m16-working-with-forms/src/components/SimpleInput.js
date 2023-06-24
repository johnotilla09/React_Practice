import React, { useState } from "react";

const SimpleInput = (props) => {
  const [ enteredName, setEnteredName ] = useState('');
  const [ enteredNameTouched, setEnteredNameTouched ] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  // This is the way in getting the user input in useState
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  // This will run whn a user doesn't input any in the ui but click the input element 
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  // this wll run submit button is click
  const submitFormHandler = (event) => {
    event.preventDefault();

    //  This will assign true if user submitted with/without anything inputed.
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    // This is for the use state
    console.log(enteredName);

    // This is a two way binding
    setEnteredName('');
    setEnteredNameTouched(false);
  };

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
