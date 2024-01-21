import {
    Route,
    Routes,
    Redirect
} from 'react-router-dom';

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
                    {/* <Route patsh='/' exact>
                        <Redirect to='/welcome'/>
                    </Route> */}
                    <Route path="/welcome" element={<Welcome/>} />
                    <Route path="/products" exact element={<Products />} />
                    <Route path="/products/:productId" element={<ProductsDetails />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;