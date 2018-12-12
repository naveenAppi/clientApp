import { GET_PRODUCT , PRODUCT_LOADING } from "../Actions/Types";

const initialState = {
    products: [],
    product: {},
    loading:false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case PRODUCT_LOADING:
        return {
            ...state,
            loading:true
        }
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload,
                loading:false
            }
        default:
            return state
    }
}