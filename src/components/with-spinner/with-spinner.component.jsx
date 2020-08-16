import React from "react";
import { Spinner } from "./spinner.component";

export const WithSpinner = (WrappedComponent) => ({
  isLoading,
  ...otherProps
}) => {
  return isLoading ? (
    <Spinner></Spinner>
  ) : (
    <WrappedComponent {...otherProps}></WrappedComponent>
  );
};
