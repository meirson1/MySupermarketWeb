import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer } from "./reducers/CartReducer";
import authReducer from "../auth/authSlice";
import {
  getProductsDetailsReducer,
  getProductsReducer,
} from "./reducers/productReducer";

const reducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductsDetailsReducer,
});

const middleware = [thunk];
const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
};
const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
