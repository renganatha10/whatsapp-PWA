import React from "react";
import { render } from "@testing-library/react";
import GroupInfoHeader from ".";

describe("GroupInfoHeader", () => {
  it("Should Render GroupInfoHeader", () => {
    const { getByText } = render(<GroupInfoHeader />);
    expect(getByText("Group Info")).toBeDefined();
  });
});
