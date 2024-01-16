import { Route, Router } from "react-router-dom/cjs/react-router-dom.min";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

function App() {
    return (
        <div>
        <Route path="/welcome">
            <Welcome/>
        </Route>
        <Route path="/products">
        <Products/>
    </Route>
    </div>
    );
}

export default App;
