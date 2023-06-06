import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
    // Refactoring an input component
    return (
      <div
        className={`${classes.control} ${
          props.isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={props.id}>{props.label}</label>
        <input
          type={props.type}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
    );
    // Refactoring an input component
};

export default Input;