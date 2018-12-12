import { ADD_CART, REMOVE_CART , REMOVE_ALL_CART } from '../Actions/Types'; 


const cartWithOutItem = (cart , item) => cart.filter(cartItem => cartItem._id !== item._id)

const itemInCart = (cart , item) => cart.filter(cartItem => cartItem._id === item._id)[0]

const addToCart = (cart , item) =>{
  const cartItem = itemInCart(cart , item)
    return cartItem === undefined
        ? [...cartWithOutItem(cart, item), { ...item, quantity: 1 , totalPrice:item.price }]
        : [...cartWithOutItem(cart, item), { ...cartItem, quantity: cartItem.quantity+1, totalPrice:(cartItem.price+cartItem.price * cartItem.quantity)}]
 
}

const removeFromCart = (cart, item) => {
    return item.quantity === 1 
        ? [...cartWithOutItem(cart, item)]
        :[...cartWithOutItem(cart, item) , {...item , quantity:item.quantity - 1 , totalPrice:((item.price-item.price * item.quantity) * (-1))}]
}

const removeAllFromCart = (cart , item) =>{
    return [...cartWithOutItem(cart , item)]
    
    }

const cartReducer = (state= [] , action) =>{
 
    switch (action.type) {

        case ADD_CART:
            return addToCart(state, action.payload);

    
        case REMOVE_CART:
            return removeFromCart(state, action.payload);
        
        case REMOVE_ALL_CART:
            return removeAllFromCart();

default:
return state
}
}
export default cartReducer;