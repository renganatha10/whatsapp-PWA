import React from "react";
import { render } from "@testing-library/react";
import GroupInfoAvatar from ".";

describe("GroupInfoAvatar", () => {
  it("Should Render GroupInfoAvatar", () => {
    const { getByText, getByTestId } = render(
      <GroupInfoAvatar
        avatarUrl="https://avatars3.githubusercontent.com/u/19145173?s=460&v=4"
        createdAt="10.31 PM"
        groupName="Name"
      />
    );
    expect(getByText("Name")).toBeDefined();
    expect(getByText("10.31 PM")).toBeDefined();
    const imageElement = getByTestId("avatar-url") as HTMLImageElement;
    expect(imageElement.src).toBe(
      "https://avatars3.githubusercontent.com/u/19145173?s=460&v=4"
    );
  });
});
