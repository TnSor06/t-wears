import React from "react";
import { shallow, mount, render } from "enzyme";
import { TestComponent } from "./TestComponent";

describe("New Test", () => {
  it("Testing shallow", () => {
    expect(shallow(<TestComponent />).length).toEqual(1);
  });
  // shallow renders component and none of its child
  // mount renders the component with its child
  // render renders the component to a static HTML between a shllow and mount

  // Snapshot testing
  it("Snapshot testing", () => {
    expect(render(<TestComponent />)).toMatchSnapshot();
  });
});
