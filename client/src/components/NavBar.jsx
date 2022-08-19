import "../styles/NavBar.css";
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="navbar">
            {/* logo */}
              <div className="navbar__logo">
                <h2>My Supermarket</h2>
            </div>
             {/* links */}
             <ul className="navbar__links">
                 <li>
                 <Link to="/cart" className="cart_link">
                     {/* Icon */}
                     <i className="fas fa-cart-plus"></i>
                     <span>
                     Cart
                     </span>
                       <span className="cartlogo__badge">0</span>
                 </Link>
                 </li>
                 <li>
                     <Link to ="/">
                         Shop
                     </Link>
                 </li>
             </ul>
        </nav>
    )
}

export default NavBar;