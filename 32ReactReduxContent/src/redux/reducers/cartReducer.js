import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../constants/cartConstants";


const initalState = {
    items: [],
}

export default function cartReducer(state = initalState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case REMOVE_FROM_CART:
            const index = state.items.findIndex(
                (item) => item.id == action.payload
            )

            if (index === -1) return state
            return {
                ...state,
                items: state.items.filter((_, i) => i !== index)
            }
        case CLEAR_CART:
            return {
                ...state,
                items: []
            }
        default:
            return state;
    }
}