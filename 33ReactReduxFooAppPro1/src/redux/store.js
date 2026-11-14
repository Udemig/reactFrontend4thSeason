import { thunk } from "redux-thunk";
import restaurantReducer from "./reducers/restaurant-reducer";
import cartReducer from "./reducers/cart-reducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";


const rootReducer = combineReducers({restaurantReducer, cartReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store