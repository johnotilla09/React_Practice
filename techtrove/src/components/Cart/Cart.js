import React, { useContext, useState } from "react";

import styles from './Cart.module.css';

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";

const Cart = (props) => {
    const [ isCheckOut, setIsCheckout ] = useState(false);
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ didSubmit, setDidSubmit ] = useState(false);
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

    const submitOrderHandler = async (userData) => {
      setIsSubmitting(true);
      await fetch('https://react-html-db32f-default-rtdb.asia-southeast1.firebasedatabase.app/order.json', {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderItems: cartCtx.items
        })
      });

      setIsSubmitting(false);
      setDidSubmit(true);
      cartCtx.clearItem();
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

    const cartModalContent = (
      <React.Fragment>
        {cartItems}
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        {isCheckOut && (
          <CheckOut onCancel={props.onClose} onConfirm={submitOrderHandler} />
        )}
        {!isCheckOut && modalAction}
      </React.Fragment>
    );

    const isSubmittingModalContent = <p>Sending order data...</p>; 

    const didSubmitModalContent = <React.Fragment>
      <p>Sucessfully sent the order!</p>
      <div className={styles.actions}>
        <button className={styles.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>;

    return (
      <Modal onClick={props.onClose}>
        { !isSubmitting && !didSubmit && cartModalContent }
        { isSubmitting && isSubmittingModalContent }
        { !isSubmitting && didSubmit && didSubmitModalContent }
      </Modal>
    );
};

export default Cart;