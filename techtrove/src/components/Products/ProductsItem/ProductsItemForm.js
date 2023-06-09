import React, { useRef, useState } from "react";

import Input from "../../UI/Input";

import styles from './ProductsItemForm.module.css';

const ProductsItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;

        if (
          enteredAmount.trim().length === 0 ||
          enteredAmount < 1 ||
          enteredAmount > 5
        ) {
          setAmountIsValid(false);
          return;
        }

        props.onAddToCart(enteredAmount);
    };

    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <Input label="Amount" ref={amountInputRef} input={{
                id: "amount",
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1"
            }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter valid amount (1-5).</p>}
        </form>
    );
};

export default ProductsItemForm;