import React from "react";

import "./custom-button.styles.js";
import { CustomButtonContainer } from "./custom-button.styles.js";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
};

export default CustomButton;
