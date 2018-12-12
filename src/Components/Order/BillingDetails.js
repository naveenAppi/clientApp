import React, { Component } from 'react';
import TextInput from '../Common/TextInput';
import { connect } from 'react-redux';
import { addAddress } from '../../Actions/orderActions';
import {withRouter , Link} from 'react-router-dom'

class BillingDetails extends Component {
    constructor() {
        super();
        this.state = {
            housename: '',
            houseNo: '',
            street: '',
            city: '',
            state: '',
            pincode: '',
            mobileNo:'',
            errors:{}
        }
    }

    onChangeHandler = e => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value  })
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        const userData={
            housename: this.state.housename,
            houseNo: this.state.houseNo,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            pincode:this.state.pincode ,
            mobileNo:this.state.mobileNo,
        }
        console.log(userData);
        this.props.addAddress(userData , this.props.history);
    }

componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
        this.setState({
            errors:nextProps.errors
        })
    }
}


    render() {
      const {errors}=this.state
    return (
        <div className="container">
            <div className="row" style={{ marginBottom: "100px", marginTop: "80px" }}>
                <Link to="/cart">
                <button className="btn btn-info">Back</button>
                </Link>
            <div className="col-md-8 offset-md-2">
                <h2 className="mt-4 text-center">Billing-Details</h2>
                <div className="row">
                    <div className="col-md-8 offset-md-2 mt-4">
                        <form onSubmit={this.onSubmitHandler}>
                            <TextInput
                            name="housename"
                            type="text"
                            placeholder="House Name"
                            value={this.state.housename}
                            onChange={this.onChangeHandler}
                            error={errors.housename}
                            />
                            <TextInput
                            name="houseNo"
                            type="number"
                            placeholder="House No.."
                            value={this.state.houseNo}
                            onChange={this.onChangeHandler}
                            error={errors.houseNo}
                                />
                                <TextInput
                                name="street"
                                type="text"
                                placeholder="Street"
                                value={this.state.street}
                                onChange={this.onChangeHandler}
                                error={errors.street}
                                />
                                <TextInput
                                name="city"
                                type="text"
                                placeholder="Bangalore"
                                value={this.state.city}
                                    error={errors.city}
                                    onChange={this.onChangeHandler}
                                />
                                <TextInput
                                name="state"
                                    type="text"
                                    placeholder="Karnataka"
                                value={this.state.state}
                                    error={errors.state}
                                    onChange={this.onChangeHandler}
                                />
                                <TextInput
                                name="pincode"
                                type="number"
                                placeholder="PinCode"
                                value={this.state.pincode}
                                onChange={this.onChangeHandler}
                                error={errors.pincode}
                                />
                                <TextInput
                                name="mobileNo"
                                type="number"
                                placeholder="Enter Your Mobile No"
                                value={this.state.mobileNo}
                                onChange={this.onChangeHandler}
                                error={errors.mobileNo}
                                />
                            <button className="btn btn-success d-block w-100 mb-2">Submit</button>
                        </form>
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
    errors:state.errors
})


export default connect(mapStateToProps , {addAddress}) (withRouter(BillingDetails));
