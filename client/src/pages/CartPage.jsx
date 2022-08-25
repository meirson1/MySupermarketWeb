import "../styles/CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getSuggestion as listSuggestion } from "../redux/actions/cartActions";
// Componnents
import CartItem from "../components/CartItem";
import Product from "../components/Product";

// Actions
import {
  addToCart,
  removeFromCart,
  sendCartDataToDB,
} from "../redux/actions/cartActions";

const CartPage = () => {
  const dispatch = useDispatch();
  const { client } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (!client) {
      navigate("/login");
    }
    if (cartItems === []) {
      navigate("/shop");
    }
  }, [client, navigate, dispatch, cartItems]);

  const getSuggestion = useSelector((state) => state.getSuggestion);
  const { suggestion } = getSuggestion;

  useEffect(() => {
    dispatch(listSuggestion(client._id));
  }, [dispatch]);

  useEffect(() => {
    if (!cartItems) {
      navigate("/shop");
    }
  }, [cartItems, navigate, dispatch]);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const submitCart = () => {
    alert(`${client.name} thank you for buying, see you next time!`);
    dispatch(sendCartDataToDB(client, cartItems, getCartSubTotal()));
  };

  return (
    <>
      <div className="cartpage">
        <div className="cartpage__left">
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/shop">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>
        <div className="cartpage__right">
          <div className="cartpage__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <button
              type="button"
              onClick={submitCart}
              disabled={cartItems.length === 0}
            >
              Proceed To Checkout
            </button>
          </div>

          <div>
            <h3>Product Suggestion</h3>
            {suggestion.length === 0 ? (
              <div>No Suggestion Yet</div>
            ) : (
              suggestion.map((product) => (
                <Product
                  key={product._id}
                  productId={product._id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  rating={product.rating}
                  imageUrl={product.imageUrl}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
