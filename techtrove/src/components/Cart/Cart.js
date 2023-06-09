import React from "react";

import styles from './Cart.module.css';
import Modal from "../UI/Modal";

const Cart = (props) => {
    const cartItems = (
      <ul className={styles['cart-items']}>
        {[
          {
            id: "c1",
            name: "CPU",
            amount: "2",
            price: "1000.99",
          },
        ].map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );

    return (
        <Modal>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>23.99</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;