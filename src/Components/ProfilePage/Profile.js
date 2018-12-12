import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBillingAddress } from '../../Actions/orderActions';
import isEmpty from '../../Validation/is_Empty';


class Profile extends Component {


componentDidMount() {
  this.props.getBillingAddress();
}


  render() {
    let content;
    if (isEmpty(this.props.order.address)) {
      content = <h3> </h3>
    } else {
      content = <div className="address-profile" style={{ color: "gray" }}>
      <h4 className="text-center">Billing-Details</h4>
      <div className="content mb-4 p-5">
        
        <h5>Address : <span>{this.props.order.address.housename} ,HouseNo: {this.props.order.address.houseNo}</span></h5>
        <h5>Street: <span>{this.props.order.address.street}</span></h5>
        <h5>State: <span>{this.props.order.address.state}</span> City:<span>{this.props.order.address.city}</span> </h5>
        <h5>PinCode: <span>{this.props.order.address.pincode}</span> Mobile:<span>{this.props.order.address.mobileNo}</span> </h5>
      </div>
      <h5 className="text-center">Thank You For Ordering.....</h5>
    </div>
    }

    return (
   
      <div className="profile">
        <div>
        <img className="profile-background"
        src="https://previews.123rf.com/images/nadianb/nadianb1706/nadianb170600089/80350094-vegetarian-food-background-organic-food-for-healthy-vegan-nutrition-ingredients-for-cooking-top-view.jpg"
            alt="" />
          <div className="container">
            <div className="row">
            <div className="profile-img w-100 mb-4 col-md-2">
                <img src={this.props.auth.user.avatar} alt="" id="profile-img" />
              </div>
              <div className="col-md-2" id="profile-name">{this.props.auth.user.name}</div>
            </div>
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  order: state.order,
  auth:state.auth
})

export default connect(mapStateToProps , {getBillingAddress}) (Profile);
