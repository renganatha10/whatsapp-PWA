import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import GroupSearch from "./index";

const onChangeText = jest.fn();

describe("Group Search Test", () => {
  it("Should Group Search Text", () => {
    const { getByRole } = render(<GroupSearch onChangeText={onChangeText} />);
    const inputNode = getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputNode, { target: { value: "Testing" } });
    expect(onChangeText).toBeCalledTimes(1);
    expect(inputNode.value).toBe("Testing");
  });

  afterEach(cleanup);
});
