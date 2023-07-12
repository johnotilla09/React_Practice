import { useSelector } from 'react-redux/es/hooks/useSelector';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isCartVisible = useSelector(state => state.ui.cartIsVisible);

  return (
    <Layout>
      { isCartVisible && <Cart /> }
      <Products />
    </Layout>
  );
}

export default App;
