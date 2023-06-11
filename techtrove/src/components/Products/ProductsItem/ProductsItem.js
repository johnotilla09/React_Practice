import React, { useContext } from "react";

import ProductsItemForm from "./ProductsItemForm";
import CartContext from "../../../store/cart-context";

import styles from './ProductsItem.module.css';

const ProductsItem = (props) => {
    const price = `$${props.product.price.toFixed(2)}`;
    const cartCtx = useContext(CartContext);

    const addToCartHandler = amount => {

      cartCtx.addItem({
        id: props.product.id,
        name: props.product.name,
        amount: amount,
        price: props.product.price
      });
    };

    return (
      <li className={styles.meal}>
        <div>
            <h3>{props.product.name}</h3>
            <div className={styles.description}>{props.product.description}</div>
            <div className={styles.price}>{price}</div>
        </div>
        <div>
            <ProductsItemForm onAddToCart={addToCartHandler}/>
        </div>
      </li>
    );
};

export default ProductsItem;