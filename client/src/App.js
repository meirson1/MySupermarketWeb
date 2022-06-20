import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Login />
      <Register/>
    </div>
  );
}

export default App;
