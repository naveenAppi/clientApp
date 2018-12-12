import React, { Component } from 'react'

class Carousel extends Component {
  render() {
    return (
      <div style={{marginTop:"20px"}}> 
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="img-responsive d-block w-100" src="https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?cs=srgb&dl=buffet-chicken-cooking-5938.jpg&fm=jpg" alt="First slide" />
              </div>
        <div className="carousel-item">
          <img className="img-responsive d-block w-100" src="https://images.pexels.com/photos/5876/food-salad-healthy-vegetables.jpg?cs=srgb&dl=antipasti-delicious-dinner-5876.jpg&fm=jpg" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="img-responsive d-block w-100" src="https://images.pexels.com/photos/1268551/pexels-photo-1268551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
          </a>
            </div>
            </div>
    )
  }
}

export default Carousel
