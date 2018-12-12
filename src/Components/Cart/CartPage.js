import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeAllFromCart } from '../../Actions/carAction';


class CartPage extends Component {
  constructor() {
    super();
    this.state = {
      cart:[]
    }
  }

componentWillMount() {
  localStorage.getItem('cart') && this.setState({
    cart: JSON.parse(localStorage.getItem('cart')),
  })
  }


  render() {
    const { cart } = this.state;
    let cartedItem;
    if (!cart.length >0) {
      cartedItem = <h1 className="text-center mt-4" style={{color:"gray"}}>There No Cart Items Found</h1>
    } else {
      cartedItem = <ul style={{marginRight:"35px"}}>
        {cart.map(cartproduct => <li key={cartproduct._id} style={{listStyle:"none"}}>
          <div className="listItems">
          <div className="row">
        <div className="col-md-2 mt-3">
        <img className="img-class" src={cartproduct.image} alt="" />
            </div>
            
              <div className="col-md-3 mt-4">
                <Link to={`/product/${cartproduct._id}`}>
                <h4 >{cartproduct.name}</h4>
                </Link>
            </div>
            <div className="col-md-2 mr-5 mt-4">
                <h4 style={{ color: "darkgray" , padding:"4px"}}>TotalPrice:{cartproduct.totalPrice}</h4>
            </div>

              <h4 className="mt-4" style={{ color: "darkgray" , padding:"4px"}}>qnty: {cartproduct.quantity}</h4>
            
          </div>
        </div>
        </li>)}
      </ul>
    }



    return (
      <div className="container" style={{ marginTop: "100px" , marginBottom:"300px"}}>
        <div className="row">
          
          <div className="col-md-10 offset-md-1">
          <div className="mycartTitle">
              <h4 className="text-mutted" style={{ color: "gray" , padding:"4px"}}>My Cart Items</h4>
          </div>
            <div>
            {cartedItem}
            </div>
            {this.state.cart.length > 0 ?
              <div className="row">
                <div className="col-md-6">
                  <Link to="/billing-address">
                    <button className="btn" id="button-c">CheckOut</button>
                    </Link>
                  </div>
              </div> :null
            }
           
          </div>

        </div>
      </div>
    )
  }
}




export default connect(null , {removeAllFromCart}) (CartPage);
