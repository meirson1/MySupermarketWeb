import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";

// Pages
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import MapsPage from "./pages/Maps"

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Register></Register>
      <Login></Login>
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/product/:id" element={<ProductPage />} />
          <Route exact path="/cart" element={<CartPage />} />
					<Route exact path="/maps" element={<MapsPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
