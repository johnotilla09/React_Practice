import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";

import styles from './HeaderCartButton.module.css';

import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnHighLighted, setBtnHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const btnStyles = `${styles.button} ${btnHighLighted && styles.bump}`;
  const { items } = cartCtx

  useEffect(() => {
    console.log("useEffect Reload!!!");
    if (items.length === 0) {
      return;
    }

    setBtnHighLighted(true)

    const timer = setTimeout(() => {
      setBtnHighLighted(false)
    }, 300);

    return () => {
      clearTimeout(timer);
      console.log("Hello Timer reset")
    };
  }, [items]);

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + parseInt(item.amount);
  }, 0);

  return (
    <button className={btnStyles} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;