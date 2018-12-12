import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from 'jwt-decode';
import PrivateRoute from './Components/Common/PrivateRoute';


import Navbar from './Components/Layouts/Navbar';
import Footer from './Components/Layouts/Footer';
import Signin from './Components/Auth/Signin';
import Signup from './Components/Auth/Signup';
import MainPage from './Components/MainPage/MainPage';
import Store from './Store';
import { setCurrentUser, logoutUser } from './Actions/authActions';
import setAuthToken from './Utiles/setAuthToken';
import CartPage from './Components/Cart/CartPage';
import Profile from './Components/ProfilePage/Profile';
import IndividualProduct  from './Components/MainPage/IndividualProduct';
import BillingDetails from './Components/Order/BillingDetails';

// Check for token
if (localStorage.jwt_token) {
  // Set auth token header auth
  setAuthToken(localStorage.jwt_token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwt_token);
  // Set user and isAuthenticated
  Store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    Store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/signin';
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={Store}>
      <Router>
      <div>
          <Navbar />
          <ToastContainer/>
     <Route exact path="/signin" component={Signin} />
     <Route exact path="/signup" component={Signup} />
     <Route exact path="/" component={MainPage} />       
     <Route exact path="/cart" component={CartPage} />       
            <Route exact path="/product/:id" component={IndividualProduct} />    
            <Switch>
            <PrivateRoute path='/billing-address' exact component={BillingDetails} />
            </Switch>       
            <Switch>
            <Route exact path="/profile" component={Profile} /> 
            </Switch>       
          <Footer />
          </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
