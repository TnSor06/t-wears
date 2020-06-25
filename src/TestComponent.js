import React from "react";
import sstyled from "styled-components";

const Text = sstyled.div`
    color:red;
    font-size:28px;
    border:${({ isActive, ...otherProps }) =>
      isActive ? "1px solid black" : "5px dotted green"};
`;

export const TestComponent = () => {
  return (
    <div>
      <Text isActive={false}>
        <p>
          ClassName are uinquely given by styled components so that is doesnt
          match anywhere else
        </p>
      </Text>
    </div>
  );
};
