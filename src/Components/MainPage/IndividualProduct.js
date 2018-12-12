import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingalProduct } from '../../Actions/productActions';
import { addToCart, removeFromCart } from '../../Actions/carAction';
import StarRatingComponent from 'react-star-rating-component';
import Spinner from '../Common/Spinner';

class IndividualProduct extends Component {


    componentDidMount() {
        this.props.getSingalProduct(this.props.match.params.id);
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('cart', JSON.stringify(nextProps.cart));
    }
    

    addCartHandler = (item) => {  
        this.props.addToCart(item);
    }


    render() { 
        
        const cartItem =
            this.props.cart.filter(cartItem => cartItem._id === this.props.product.product._id)[0];

        const { product , loading } = this.props.product
        let productContent;

        if (product === null || loading) {
            productContent = <Spinner/>
        } else {
            productContent = (<div className="w-100 mb-4" style={{ backgroundColor: "white", height: "600px" }}>
            <div className="row">
            <div className="col-md-6">
                    <div className="w-100">
                        <div className="image-gallery">
                            <div className="main-img">
<img src={product.image} alt="" />
                            </div>
                            <div className="img-sub">
                                <img id="sub-img" src="https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                                <img id="sub-img" src="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                <img id="sub-img" src="https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                            </div>
                        </div>
                    </div>
            </div>
            <div className="col-md-6">
                    <div className="w-100">
                        <div className="product-info">
                            <h3 className="text-mutted ml-3 mt-4 p-1">
                                {product.name}
                     </h3>
                            <p>{product.title} </p>
                            <h4 className="price">Price: &#8377; {product.price}</h4>
                            <p className="count-rating">{product.rating}</p>
         <span className="rating-individual">
           <StarRatingComponent 
           name="rate2" 
           editing={false}
           renderStarIcon={() => <span><i className="fas fa-star"/></span>}
           starCount={5}
           value={product.rating}
                                />
                            </span>
                            <div className="ingredients text-mutted p-1">
                                <h6>Ingredients : It is a long established fact that a reader
                                 will be distracted by the readable content of a page when 
                                 looking at its layout. The point of using Lorem
                                  Ipsum is that it has a more-or-less normal
                                  distribution of letters, as opposed to using 'Content here,
                            content here', making it look like readable English</h6>
                            </div>
                                <div className="counter">
                                    {cartItem ?<button className="counter-button"
                                    onClick={()=>this.props.removeFromCart(cartItem)}
                                    >-</button> :null}

                                    <span className="count-nu">
                                        {(cartItem && cartItem.quantity)|| 0}
                                </span>
                                    <button
                                        className="counter-button"
                                        onClick={this.addCartHandler.bind(this , product)}
                                    >+</button>
                            </div>
                            <div className="cart-buttons">
                                <Link to="/">
                                        <button className="btn" id="c-btn">
                                        {cartItem ? "Contenu To Shpping" : "Back"}
                                        </button>
                                    </Link>
                                    {cartItem ?<Link to="/cart">
                                    <button className="btn" id="c-btn1">Buy Now</button>
                                    </Link> :null}

                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>); 
        }


    return (
      <div className="container">
            <div className="row">
                <div className="col-md-12" style={{marginTop:"80px"}}>
                   {productContent} 
                </div>
            </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    product: state.product,
    cart: state.cart
});

export default connect(mapStateToProps , {getSingalProduct , addToCart , removeFromCart })(IndividualProduct);
