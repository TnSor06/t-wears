import React, { Component } from "react";

import "./sign-up.styles.scss";
import { FormInput } from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    const { signUpStart } = this.props;
    signUpStart({ email, password, displayName });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign Up with your Email and Password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="Display Name"
            type="text"
            name="displayName"
            value={displayName}
            required
          ></FormInput>
          <FormInput
            handleChange={this.handleChange}
            label="Email"
            type="email"
            name="email"
            value={email}
            required
          ></FormInput>
          <FormInput
            handleChange={this.handleChange}
            label="Password"
            type="password"
            name="password"
            value={password}
            required
          ></FormInput>
          <FormInput
            handleChange={this.handleChange}
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
          ></FormInput>
          <div className="buttons">
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpStart: (userCredentials) => {
      dispatch(signUpStart(userCredentials));
    },
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
