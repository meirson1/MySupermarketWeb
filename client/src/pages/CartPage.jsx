import "../styles/CartPage.css"

// Componnents
import CartItem from "../components/CartItem"

const CartPage = () => {
  return <div className="cartpage">
    <div className="cartpage__left">
    <h2>Shopping Cart</h2>
    <CartItem/>
    <CartItem/>
    <CartItem/>
    <CartItem/>
    <CartItem/>  
    </div>
    <div className="cartpage__right">
    <div className="cartpage__info">
      <p>Subtotal (0) items</p>
      <p>$2.00</p>
    </div>
    <div>
      <button>Proceed To Checkout</button>
    </div>
    </div>
    </div>
}
export default CartPage
