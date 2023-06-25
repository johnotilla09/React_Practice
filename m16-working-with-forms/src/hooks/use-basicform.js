import { useState } from "react";

const useBasicForm = (validate) => {
    const [ enteredValue, setEnteredValue ] = useState('');
    const [ isTouched, setIsTouched ] = useState(false);

    // This check if the inputed value is '' (empty string).
    const valueIsValid = validate(enteredValue);
    const hasError = !valueIsValid &&  isTouched;

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = event => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };

};

export default useBasicForm;