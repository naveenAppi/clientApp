import axios from 'axios';
import { GET_PRODUCT, PRODUCT_LOADING } from './Types';


export const getSingalProduct = id => dispatch => {
    dispatch(setProductLoading());
    axios.get(`/product/${id}`)
        .then(res => dispatch({
            type: GET_PRODUCT,
            payload:res.data
        }))
        .catch(err => console.log(err));
}

//setProfile loading 
export const setProductLoading = () => {
    return {
        type:PRODUCT_LOADING
    }
}