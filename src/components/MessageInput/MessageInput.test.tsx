import React from "react";
import { fireEvent, render } from "@testing-library/react";
import MessageInput from ".";

const onChangeText = jest.fn();

describe("MessageInput", () => {
  it("Should Enter Message Input", () => {
    const { getByRole } = render(<MessageInput onChangeText={onChangeText} />);
    const inputNode = getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputNode, { target: { value: "Testing" } });
    expect(onChangeText).toBeCalledTimes(1);
    expect(inputNode.value).toBe("Testing");
  });
});
