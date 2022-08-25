import "../styles/NavBar.css";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import ChatIcon from "@mui/icons-material/Chat";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../auth/authSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { client } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <Link style={{ textDecoration: "none" }} to="/">
          <h2>My Supermarket</h2>
        </Link>
      </div>
      {/* links */}
      <ul className="navbar__links">
        {client ? (
          <>
            <li>
              <Link to="/cart" className="cart_link">
                {/* Icon */}
                <i className="fas fa-cart-plus"></i>
                <span>
                  Cart <span className="cartlogo__badge">{getCartCount()}</span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/chat">
                {" "}
                <ChatIcon /> chat
              </Link>
            </li>
            <li>
              <button className="btn btn-primary" onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt />
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser />
                <span>Register</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
