import React from "react";

import styles from './Input.module.css';

const Input = (props) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}/> {/* dd all the props in the input element */}
        </div>
    );
};

export default Input;

