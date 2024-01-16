import {
    Route,
    Router,
    Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductsDetails from "./pages/ProductsDetails";

function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Switch>
                    <Route path="/welcome">
                        <Welcome />
                    </Route>
                    <Route path="/products/:productId">
                        <ProductsDetails />
                    </Route>
                    <Route path="/products">
                        <Products />
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;