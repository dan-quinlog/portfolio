import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError } = this.props;
    if (authError && authError === "Login Success") return <Redirect to="/" />;
    return (
        <form onSubmit={this.handleSubmit} className="login">
          <span className='login__title'>Sign In</span>
          <div className="login__input">
            <label htmlFor="email" className='login__input__title'>email</label>
            <input type="email" id="email" onChange={this.handleChange} className='login__input__field'/>
          </div>
          <div className="login__input">
            <label htmlFor="password" className='login__input__title'>password</label>
            <input type="password" id="password" onChange={this.handleChange} className='login__input__field'/>
          </div>
          <div className="login__confirm">
            <button className='login__button'>login</button>
            <div className="login__autherror">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
