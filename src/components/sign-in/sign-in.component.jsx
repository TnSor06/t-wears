import React, { Component } from "react";

import "./sign-in.styles.scss";
import { FormInput } from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <FormInput
            handleChange={this.handleChange}
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            required
          ></FormInput>
          <FormInput
            handleChange={this.handleChange}
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            required
          ></FormInput>
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
