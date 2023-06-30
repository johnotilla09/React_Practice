import React, { useContext, useState } from "react";

import styles from './Cart.module.css';

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";

const Cart = (props) => {
    const [ isCheckOut, setIsCheckout ] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItem = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
      cartCtx.removeItem(id); 
    };

    const cartItemAddHandler = item => {
      cartCtx.addItem({...item, amount:1});
      console.log("hello john c otilla");
    };

    const orderHandler = () => {
      setIsCheckout(true);
    };

    const cartItems = (
      <ul className={styles["cart-items"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
    );

    const modalAction = (
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && (
          <button className={styles.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    );

    return (
      <Modal onClick={props.onClose}>
        {cartItems}
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        { isCheckOut && <CheckOut onCancel={props.onClose}/> }
        { !isCheckOut && modalAction }
      </Modal>
    );
};

export default Cart;