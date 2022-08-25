import * as actionTypes from "../constants/cartCons";
import axios from "axios";
import qs from "qs";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:8080/api/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      rating: data.rating,
      qty,
    },
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const sendCartDataToDB =
  (client, cartItems, totalPrice) => async (dispatch, getState) => {
    dispatch({
      type: actionTypes.CART_RESET,
    });
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
    const config = {
      url: `http://localhost:8080/api/carts`,
      method: "get",
      params: {
        products: cartItems,
        totalPrice: totalPrice,
        userId: client._id,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params);
      },
    };
    await axios(config);
  };
