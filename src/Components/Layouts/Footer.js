import React, { Component } from 'react';
import IFram from 'react-iframe';

class Footer extends Component {
  render() {
      return (
        
          <footer className="bg-dark text-white">
              <div className="container">
                  <div className="row">
                      <div className="col-md-4 mt-4">
                          <p className="lead text-white"><i className="fas fa-utensils" id="brand-icaon"></i>YummyFoods</p>
                          <p className="text-mutted">
                          <i className="fas fa-map-marker-alt"></i> #604 , KoddgeHalli Main Road,
                         Hebbal Ring Road  Banaglore-560094<br />
                              <i className="fas fa-envelope"></i> <span>Yummyfoodsbangalore@gmail.com</span><br />
                              <i className="fas fa-phone"></i> <span>+91-97396-23457 , 080-223344</span>
                          </p>
                      </div>
                      <div className="col-md-4 mb-3">
                          <p className="mt-1"><i className="fas fa-map-pin"></i> Map</p>
                          <div className="map">
         <IFram
 url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.86468533074!2d77.57133272782049!3d13.069615352664918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae181e3c578049%3A0x1f7122093ff96d5c!2sKodigehalli%2C+Bengaluru%2C+Karnataka!5e0!3m2!1sen!2sin!4v1544293599448" width="330px" height="150px" />
                          </div>
                      </div>
                      <div className="col-md-4">
                          <h5 className="text-center mt-4">Free Home Delivery</h5>
                          <p className="text-mutted">YummyFoods Is A Best Online Resturant In The Bangalore City, We Are Providing A Quick Delivey Over All Banaglore City</p>
                          <p className="text-mutted">Call TollFree-No: 1800-64532-1234</p>
                  </div>
                  </div>
              </div>
              <div className="container-fluid">
              <div className="row">
              <div className="" style={{width:"100%" , backgroundColor:"#424242"}}>
                  <p className="text-center text-white p-1" style={{margin:"auto"}}>
                  Copyright &copy; {new Date().getFullYear()} YummyFoods
                  </p>
              </div>
              </div>
              </div>
      </footer>
    )
  }
}

export default Footer
