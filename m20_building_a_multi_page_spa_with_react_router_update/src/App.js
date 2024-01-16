import { Route, Router } from "react-router-dom/cjs/react-router-dom.min";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductsDetails from "./pages/ProductsDetails";

function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Route path="/welcome">
                    <Welcome />
                </Route>
                <Route path="/products">
                    <Products />
                </Route>
                <Route path="/product-detail/:productId">
                    <ProductsDetails />
                </Route>
            </main>
        </div>
    );
}

export default App;
