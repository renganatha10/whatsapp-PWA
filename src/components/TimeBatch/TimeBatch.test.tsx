import React from "react";
import { render } from "@testing-library/react";
import TimeBatch from ".";

describe("TimeBatch", () => {
  it("Should render TimeBatch", () => {
    const { getByText } = render(<TimeBatch time="10.21OM" />);
    expect(getByText("10.21OM")).toBeDefined();
  });
});
