import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import {Link } from 'react-router-dom';

import Spinner from '../Common/Spinner';
import Carousel from './Carousel';

class MainPage extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
      page: 1,
      perPage: 10,
      scrolling: false,
      pages: null,
      loading:false
    }
  }

  componentDidMount = () => {
    this.getProducts();
    this.scrollListener = window.addEventListener('scroll', (e) => {
      this.handleScroll(e);

    })
  }

  handleScroll = (e) => {
    const { pages, page, scrolling } = this.state
    if (scrolling) return
    if (pages <= page) return
    // const lastLi = document.querySelector('ul.product > li:last-child')
    // const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
    const pageOffset = window.pageYOffset + window.innerHeight
    var buttonOffset = 20;
    if (pageOffset > 2000 - buttonOffset)this.loadMore() 
    
  }
  

  getProducts = () => {
    const {page ,perPage , products } = this.state
    axios.get(`/product?page=${page}&perPage=${perPage}`)
      .then(result => {
        this.setState({
          products: [...products, ...result.data.docs],
          scrolling: false,
          pages:result.data.pages
        })
      })
    .catch(err=> console.log(err))
  }
  
  loadMore = () => {
    this.setState(preveState => ({
      page: preveState.page + 1,
      scrolling: true
  }), this.getProducts)
  }
  

  render() {


    const { products, loading } = this.state
    let productContent;

    if (products === null || loading || Object.keys(products).length === 0) {
     productContent = <Spinner/>
    } else {
      productContent = <ul className="product">
        {products.map((product) => {
          return <li key={product._id}>
            <div className="col-md-6 col-xs-12">
            <div className="card-b"> 
            <img className="card-img"
            src={product.image} alt="" />
               <div className="body-card">
                  <h4>
     {product.name.length < 13 ? `${product.name}` : `${product.name.substring(0 , 15)}...`}</h4>
                  <p className="text-mutted">
                    {product.title.length < 60 ? `${product.title}` : `${product.title.substring(0, 62)}...`}</p>
                  <h4> &#8377; {product.price}</h4>
                           <a href="/" className="amma">{product.rating}</a>
                           <span className="rating">
                       <StarRatingComponent 
                       name="rate2" 
                       editing={false}
                       renderStarIcon={() => <span><i className="fas fa-star"/></span>}
                       starCount={5}
                       value={product.rating}
                     />
                  </span>
                  <Link to={`/product/${product._id}`}>
                  <button className="btn btn-outline-info" id="view" >View</button>
                  </Link>
               </div>
             </div>
            </div>
          </li>
      })}
      </ul>
    }


    return (
      <div>
        <Carousel />
        <div className="container">
          <div className="row">
            <div className=" m-block m-auto">
              <div className="card-algain w-100">
              {productContent}
              </div>
            </div>
          </div>
        </div>
        </div>
    )
  }
}

export default  MainPage;
