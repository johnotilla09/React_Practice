import { useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { sendCartData } from './store/cart-actions';
import { fetchData } from './store/cart-actions';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isCartVisible = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {

    // this condition is the reason why data in firebase did not change when we reload the page
    if (isInitial) {
      isInitial = false;
      // dispatch(fetchData());
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
