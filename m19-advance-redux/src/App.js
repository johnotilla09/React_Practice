import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isCartVisible = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    fetch(
      "https://react-html-db32f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
        headers: {
          "ConTent-Type": "application/json"
        }
      }
    );
  }, [cart]);
  
  return (
    <Layout>
      { isCartVisible && <Cart /> }
      <Products />
    </Layout>
  );
}

export default App;
