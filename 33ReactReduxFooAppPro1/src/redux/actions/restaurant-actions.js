import AT from "./action-types";
import api from "../../api";

export const getRestaurants = () => (dispatch) => {

    dispatch({ type: AT.REST_LOADING })

    api
        .get("/restaurants")
        .then((res) => {
            console.log("API_DATA: ", res.data);
            dispatch({
                type: AT.REST_SUCCESS,
                payload: res.data
            })
        })
        .catch((err) => {

            console.log("API_ERROR: ", res.message);
            dispatch({ type: AT.REST_ERROR, payload: err.message })
        })

};

