import React,{ useEffect, useState } from "react";

import Card from "../UI/Card";
import ProductsItem from "./ProductsItem/ProductsItem";

import styles from './AvailableProducts.module.css';

const AvailableProducts = (props) => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://react-html-db32f-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json').then();
      const responseData = await response.json();

      const loadProducts = [];

      for (const key in responseData) {
        loadProducts.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
      }

      setProducts(loadProducts)
    };

    fetchProducts();
  }, []);

    const productsList = products.map((product) => (
      <ProductsItem
        key={product.id}
        product={product}
      />
    ));

    return (
      <div className={styles.products}>
        <Card>
          <ul>{productsList}</ul>
        </Card>
      </div>
    );
};

export default AvailableProducts;