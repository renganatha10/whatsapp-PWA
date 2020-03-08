import React from "react";
import { render } from "@testing-library/react";
import GroupDescription from ".";

describe("GroupDescription", () => {
  it("Should Render GroupDescription", () => {
    const { getByText } = render(
      <GroupDescription description={"I am good"} />
    );

    expect(getByText("I am good")).toBeDefined();
  });
});
