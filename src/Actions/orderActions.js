import axios from 'axios';
import { ADDRESS , GET_ERRORS } from './Types';


export const addAddress = (userData , history) => dispatch => {
    axios.post('/order/billingaddress', userData)
        .then(res => {
            localStorage.removeItem('cart')
            history.push('/profile')
        } )
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload:err.response.data
        }))
}

export const getBillingAddress = () =>dispatch=> {
    axios.get('/order/billingaddress')
        .then(res => dispatch({
            type: ADDRESS,
            payload:res.data
    }))
}