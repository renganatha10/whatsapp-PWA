import React from "react";
import { render } from "@testing-library/react";
import Button from "../index";

describe("Button Test", () => {
  it("Should Render Text", () => {
    const { getByText } = render(<Button />);
    expect(getByText("I am Button")).toBeDefined();
  });
});
