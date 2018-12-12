import React, { Component } from 'react';
import TextInput from '../Common/TextInput';
import { connect } from 'react-redux';

import { signIn , OauthGoogle } from '../../Actions/authActions';
import GoogleLogin from 'react-google-login';

class Signin extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
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
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.signIn(userData);
    }

      responseGoogle=(res)=> {
      this.props.OauthGoogle(res.accessToken)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors:nextProps.errors
            })
        }
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
    }
    
    

    render() {
        const { errors } = this.state
    return (
        <div className="container">
            <div className="row" style={{marginBottom:"100px" , marginTop:"100px"}}>
                <div className="col-md-8 offset-md-2">
                    <h2 className="mt-4 text-center">Sign_In</h2>
                    <div className="row">
                        <div className="col-md-8 offset-md-2 mt-4">
                            <form onSubmit={this.onSubmitHandler}>
                                <TextInput
                                name="email"
                                type="email"
                                placeholder="Enter Your Email"
                                value={this.state.email}
                                onChange={this.onChangeHandler}
                                error={errors.email}
                                />
                                <TextInput
                                name="password"
                                type="password"
                                placeholder="Enter Your Password"
                                value={this.state.password}
                                onChange={this.onChangeHandler}
                                error={errors.password}
                                />
                                <button className="btn btn-success d-block w-100 mb-2">Sing-In</button>
                            </form>
                            <p className="text-mutted text-center lead">Or Login With Google</p>
                                <GoogleLogin
                                clientId="29462360751-6o24smq48bnuhu7h8o3lr971tcnmth2f.apps.googleusercontent.com"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                className="btn btn-danger d-block w-100 mb-4"
                                buttonText="Google"
                                />
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
    errors: state.errors,
    auth:state.auth
})

export default connect(mapStateToProps,{signIn , OauthGoogle}) (Signin);
