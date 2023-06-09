import React from "react";

import CartContext from "./cart-context";

// Manage the current context to data and provide that context to all components that want access to it. 
const CartProvider = (props) => {

    addItemCartHandler = item => {};

    removeItemCartHandler = id => {};

    const cartContext = {
        item: [],
        totalAmount: 0,
        addItem: addItemCartHandler,
        removeItem: removeItemCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;