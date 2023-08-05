//import here the rout component
import { Route } from 'react-router-dom';
//import here the rout component

 // components
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';

const App = () => {
  return (
    <div>
      <MainHeader/>
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>

        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;
