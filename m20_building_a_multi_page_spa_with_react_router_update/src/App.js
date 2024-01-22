import { Route, Routes, Navigate } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductsDetails from "./pages/ProductsDetails";

function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Routes>
                    <Route patsh="/" element={<Navigate to="/welcome" />} />
                    <Route path="/welcome/*" element={<Welcome />} >
                    <Route path="new-user" element={<p>welcome, new user</p>} />
                    </Route>
                    <Route path="/products" element={<Products />} />
                    <Route
                        path="/products/:productId"
                        element={<ProductsDetails />}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
