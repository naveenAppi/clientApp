import {REMOVE_CART , ADD_CART, REMOVE_ALL_CART} from './Types';



export const addToCart = (item) => dispatch => {
    dispatch({
    type: ADD_CART,
    payload:item 
    })
}


export const removeFromCart = (item) => dispatch => {
    dispatch({
    type: REMOVE_CART,
    payload:item 
    })
}
export const removeAllFromCart = (item) => dispatch => {
    dispatch({
    type: REMOVE_ALL_CART,
    payload:item 
    })
}