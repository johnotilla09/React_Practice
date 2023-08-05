//import here the rout component
import { Route } from 'react-router-dom';
//import here the rout component

 // components
import Welcome from './components/Welcome';
import Products from './components/Products';

const App = () => {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>

      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
