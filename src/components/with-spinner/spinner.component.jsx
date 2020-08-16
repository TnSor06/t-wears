import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

export const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>
  );
};
