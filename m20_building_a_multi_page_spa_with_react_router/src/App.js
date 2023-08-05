//import here the rout component
import { Route } from 'react-router-dom';
//import here the rout component

 // components
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDeatil from './pages/ProductDetail';

const App = () => {
  return (
    <div>
      <MainHeader/>
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>

        {/* Products */}
        <Route path="/products">
          <Products />
        </Route>
        <Route path='/product-detail/:productId'>
          <ProductDeatil />
        </Route>
      </main>

    </div>
  );
}

export default App;
