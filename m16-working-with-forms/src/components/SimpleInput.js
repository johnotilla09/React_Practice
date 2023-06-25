import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // this wll run submit button is click
  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    // This is for the use state
    console.log(enteredName);
    console.log(enteredEmail);

    // This is a two way binding
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  console.log(formIsValid + "form is valid");

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          autoComplete="false"
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className={emailInputClass}>
      <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          autoComplete="false"
        />
        {emailInputHasError && (
          <p className="error-text">Email must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;





// This is the old code

// import React, { useState } from "react";

// const SimpleInput = (props) => {
//   const [ enteredName, setEnteredName ] = useState('');
//   const [ enteredNameTouched, setEnteredNameTouched ] = useState(false);

//   const [ enteredEmail, setEnteredEmail ] = useState('');
//   const [ enteredEmailTouched, setEnteredEmailTouched ] = useState(false);

//   const enteredNameIsValid = enteredName.trim() !== '';
//   const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

//   const enteredEmailIsValid = enteredEmail.includes("@") && enteredEmail.includes(".com");
//   const emailInputIsvalid = !enteredEmailIsValid && enteredEmailTouched;

//   let formIsValid = false;

//   if (enteredNameIsValid || emailInputIsvalid) {
//     formIsValid = true;
//   }

//   // This is for getting the user name
//   const nameInputChangeHandler = (event) => {
//     setEnteredName(event.target.value);
//   };

//   const emailInputChangeHandler = (event) => {
//     setEnteredEmail(event.target.value);
//   };

//   // This will run when a user doesn't input any in the ui but click the input element 
//   const nameInputBlurHandler = (event) => {
//     setEnteredNameTouched(true);
//   };

//   const emailInputBlurHandler = (event) => {
//     setEnteredEmailTouched(true);
//   };

//   // this wll run submit button is click
//   const submitFormHandler = (event) => {
//     event.preventDefault();

//     //  This will assign true if user submitted with/without anything inputed.
//     setEnteredNameTouched(true);
//     setEnteredEmailTouched(true);

//     if (!enteredNameIsValid && !enteredEmailIsValid) {
//       return;
//     }

//     // This is for the use state
//     console.log(enteredName);
//     console.log(enteredEmail);

//     // This is a two way binding
//     setEnteredName('');
//     setEnteredNameTouched(false);

//     setEnteredEmail('');
//     setEnteredEmailTouched(false);
//   };

//   const nameInputClasses = nameInputIsValid
//     ? "form-control invalid"
//     : "form-control";

//   const emailInputClass = emailInputIsvalid
//     ? "form-control invalid"
//     : "form-control";

//   return (
//     <form onSubmit={submitFormHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           type="text"
//           id="name"
//           onChange={nameInputChangeHandler}
//           onBlur={nameInputBlurHandler}
//           value={enteredName}
//         />
//         {nameInputIsValid && (
//           <p className="error-text">Name must not be empty!</p>
//         )}
//       </div>
//       <div className={emailInputClass}>
//       <label htmlFor="email">Your Name</label>
//         <input
//           type="email"
//           id="email"
//           onChange={emailInputChangeHandler}
//           onBlur={emailInputBlurHandler}
//           value={enteredEmail}
//           autoComplete="false"
//         />
//         {emailInputIsvalid && (
//           <p className="error-text">Email must not be empty!</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;
