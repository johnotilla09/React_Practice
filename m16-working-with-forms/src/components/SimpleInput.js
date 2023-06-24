import React, { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [ enteredName, setEnteredName ] = useState('');

  // This is the way in getting the user input in useState
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    // This is for the use state
    console.log(enteredName);

    // We assign the value from useRef state
    const enteredNameRef = nameInputRef.current.value;

    console.log(enteredNameRef);

    setEnteredName('');
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          ref={nameInputRef}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
