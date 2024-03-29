import * as actionTypes from "../constants/cartCons";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case actionTypes.CART_RESET:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export const getSuggestionReducer = (state = { suggestion: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_SUGGEST_REQUEST:
      return {
        loading: true,
        suggestion: [],
      };
    case actionTypes.GET_SUGGEST_SUCCESS:
      return {
        loading: false,
        suggestion: action.payload,
      };
    case actionTypes.GET_SUGGEST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
