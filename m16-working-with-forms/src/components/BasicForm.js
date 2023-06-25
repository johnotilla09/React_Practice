import useBasicForm from "../hooks/use-basicform";

const BasicForm = (props) => {
  // This is for the First Name
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: inputFirstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: inputFirstNameBlurChangeHandler,
    reset: resetFirstName,
  } = useBasicForm((value) => value.trim() !== "");

  // This is for the Last Name
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: inputLastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: inputLastNameBlurChangeHandler,
    reset: resetLastName,
  } = useBasicForm((value) => value.trim() !== "");

  // This is for the email
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: inputEmailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: inputEmailBlurChangeHandler,
    reset: resetEmail,
  } = useBasicForm((value) => value.includes('@') && value.trim() !== '');

  let formIsvalid = false;

  // A condition that check if the form is valid
  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsvalid = true;
  }

  const submitFormHandler = event => {
    event.preventDefault();

    // Check if entered name is not '' (empty string).
    if (!formIsvalid) {
      return;
    }

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameStyles = inputFirstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameStyles = inputLastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailStyles = inputEmailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={firstNameStyles}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={inputFirstNameBlurChangeHandler}
            value={enteredFirstName}
            autoComplete="false"
          />
          {inputFirstNameHasError && (
          <p className="error-text">First name must not be empty!</p>
        )}
        </div>
        <div className={lastNameStyles}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={inputLastNameBlurChangeHandler}
            value={enteredLastName}
            autoComplete="false"
          />
          {inputLastNameHasError && (
          <p className="error-text">Last name must not be empty!</p>
        )}
        </div>
      </div>
      <div className={emailStyles}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={inputEmailBlurChangeHandler}
          value={enteredEmail}
          autoComplete="false"
        />
        {inputEmailHasError && (
          <p className="error-text">Email must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsvalid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
