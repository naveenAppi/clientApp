import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {logoutUser} from '../../Actions/authActions'

class Navbar extends Component {

  signOutHandler = e => {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    return (
        <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
            <Link to="/" className="navbar-brand" style={{color:"#fff"}}>
            <i className="fas fa-utensils" id="brand-icaon"></i> YummyFoods
            </Link>
                
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav ml-auto" id="navbar" >
                  <li className="nav-item">
                <Link className="nav-link" to="/cart" style={{ color: "#fff" }}><i className="fas fa-shopping-cart"></i> Cart {this.props.cart.length > 0 ? <span className="cart-indicatore">{this.props.cart.length}</span>  : null }</Link>
              </li>
              {this.props.auth.isAuthenticated ?
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/profile" style={{color:"#fff"}} ><img src={this.props.auth.user.avatar} alt="" className="profile-pic"/>
                    <span> {this.props.auth.user.name}</span></Link>
                </li>
             <li className="nav-item">
                    <Link className="nav-link" to="/"
                      style={{ color: "#fff" }}
                      onClick={this.signOutHandler}
                    ><i className="fas fa-power-off" /> SignOut</Link>
             </li>
                </ul> :
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/signin" ><i className="fas fa-sign-out-alt"></i> SignIn</Link>
                </li>
             <li className="nav-item">
             <Link className="nav-link" to="/signup" ><i className="fas fa-sign-out-alt"></i> SignUp</Link>
             </li>
                </ul>}
                </ul>
                </div>
            </div>
      </nav>
      
    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  cart:state.cart
  
})

export default connect(mapStateToProps , {logoutUser}) (Navbar);
