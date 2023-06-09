import React, { Fragment } from "react";

import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <Fragment>
      <Cart/>
      <Header />
      <main>
        <Products></Products>
      </main>
    </Fragment>
  );
};

export default App;
