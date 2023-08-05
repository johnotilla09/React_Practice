//import here the rout component
import { Route, Switch } from 'react-router-dom';
//import here the rout component

 // components
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDeatil from './pages/ProductDetail';

const App = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>

          {/* Products */}
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDeatil />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
