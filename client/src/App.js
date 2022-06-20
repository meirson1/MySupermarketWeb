import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./pages/HomePage";
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="Container">
      <Header/>
      <HomePage />  
      <Login />
      <Register/>
      <Footer/>
    </div>
  );
}

export default App;
