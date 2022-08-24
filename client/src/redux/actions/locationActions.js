import * as actionTypes from "../constants/locationCons";
import axios from "axios";

export const getLocations = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_LOCATIONS_REQUEST });
    const { data } = await axios.get("http://localhost:8080/api/locations");
    dispatch({
      type: actionTypes.GET_LOCATIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_LOCATIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
