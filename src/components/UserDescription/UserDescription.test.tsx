import React from "react";
import { render } from "@testing-library/react";
import UserDescription from ".";

describe("User Description", () => {
  it("Should Render User Description", () => {
    const { getByText } = render(
      <UserDescription phonoNumber={"phonoNumber"} description={"descition"} />
    );

    expect(getByText("phonoNumber")).toBeDefined();
    expect(getByText("descition")).toBeDefined();
  });
});
