import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Components
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import StatsPage from "./pages/Stats";
// import MapsPage from "./pages/Maps"
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/product/:id" element={<ProductPage />} />
            <Route exact path="/cart" element={<CartPage />} />
            <Route exact path="/stats" element={<StatsPage/>} />
            {/* <Route exact path="/maps" element={<MapsPage />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
      <br />
      <Footer />
    </>
  );
}

export default App;
