import { Route, Router } from "react-router-dom/cjs/react-router-dom.min";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";

function App() {
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
