import React, { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [ enteredName, setEnteredName ] = useState('');
  const [ enteredNameIsValid, setEnteredNameIsValid ] = useState(true);

  // This is the way in getting the user input in useState
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    // This is for the use state
    console.log(enteredName);

    // We assign the value from useRef state
    const enteredNameRef = nameInputRef.current.value;

    console.log(enteredNameRef);

    setEnteredName('');
  };

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          ref={nameInputRef}
          value={enteredName}
        />
        {!enteredNameIsValid && <p className="error-text">Name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
