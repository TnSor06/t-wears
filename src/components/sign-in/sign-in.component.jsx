import React, { useState } from "react";

import "./sign-in.styles.scss";
import { FormInput } from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

const SignIn = (props) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { googleSignInStart, emailSignInStart } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userCredentials;
    emailSignInStart(email, password);
    // States are automatically set by redux sagas
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          label="Email"
          type="email"
          name="email"
          value={userCredentials.email}
          required
        ></FormInput>
        <FormInput
          handleChange={handleChange}
          label="Password"
          type="password"
          name="password"
          value={userCredentials.password}
          required
        ></FormInput>
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password })),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
