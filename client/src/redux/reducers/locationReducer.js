import * as actionTypes from "../constants/locationCons";

export const getLocationsReducer = (state = { locations: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_LOCATIONS_REQUEST:
      return {
        loading: true,
        locations: [],
      };
    case actionTypes.GET_LOCATIONS_SUCCESS:
      return {
        loading: false,
        locations: action.payload,
      };
    case actionTypes.GET_LOCATIONS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
