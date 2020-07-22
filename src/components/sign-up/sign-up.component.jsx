import React, { useState } from "react";

import "./sign-up.styles.scss";
import { FormInput } from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = (props) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    const { signUpStart } = props;
    signUpStart({ email, password, displayName });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign Up with your Email and Password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          required
        ></FormInput>
        <FormInput
          handleChange={handleChange}
          label="Email"
          type="email"
          name="email"
          value={email}
          required
        ></FormInput>
        <FormInput
          handleChange={handleChange}
          label="Password"
          type="password"
          name="password"
          value={password}
          required
        ></FormInput>
        <FormInput
          handleChange={handleChange}
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
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpStart: (userCredentials) => {
      dispatch(signUpStart(userCredentials));
    },
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
