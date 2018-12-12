import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import productReducers from './productReducers';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';

export default combineReducers({
    auth: authReducer,
    cart: cartReducer,
    product: productReducers,
    errors: errorReducer,
    order:orderReducer
});