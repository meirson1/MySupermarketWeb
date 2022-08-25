import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer, getSuggestionReducer } from "./reducers/CartReducer";
import authReducer from "../auth/authSlice";
import {
  getProductsDetailsReducer,
  getProductsReducer,
} from "./reducers/productReducer";
import { getLocationsReducer } from "./reducers/locationReducer";

const reducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductsDetailsReducer,
  getLocations: getLocationsReducer,
  getSuggestion: getSuggestionReducer,
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
