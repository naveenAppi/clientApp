import axios from 'axios';
import { GET_ERRORS , SET_CURRENT_USER } from './Types';
import setAuthToken from '../Utiles/setAuthToken';

import { toast } from 'react-toastify';
import jwt_decode from 'jwt-decode';

export const signUp = (userData , history) => dispatch => {
    axios.post('/user/signup', userData)
        .then(res => {
            history.push('/signin') 
            if (res) {
       return  toast.success("signup successfully please login", {
        position: toast.POSITION.TOP_RIGHT
      })}})
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload:err.response.data
        }))
}

export const signIn = (userData) => dispatch => {
    axios.post('/user/signin', userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwt_token', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            console.log('decode', decoded);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload:err.response.data
    }))
}

export const OauthGoogle = data=>{
    return async dispatch =>{
        try {
            const res = await axios.post('user/googleSignIn' ,{
                access_token:data
            });         
            const { token } = res.data;
            localStorage.setItem('jwt_token', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            console.log('decode', decoded);
            dispatch(setCurrentUser(decoded)); 
        } catch (error) {
            console.log(error)
        }
    }
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload:decoded
    }
}

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwt_token');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
  };