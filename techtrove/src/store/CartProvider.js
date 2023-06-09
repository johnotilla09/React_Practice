import React from "react";

import CartContext from "./cart-context";

// Manage the current context to data and provide that context to all components that want access to it. 
const CartProvider = (props) => {

    const addItemCartHandler = items => {};

    const removeItemCartHandler = id => {};

    const cartContext = {
        items: [],
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