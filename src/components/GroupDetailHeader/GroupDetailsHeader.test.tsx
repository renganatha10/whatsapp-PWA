import React from "react";
import { render } from "@testing-library/react";
import GroupDetailsHeader from ".";

describe("Group Details Header", () => {
  const { getByText } = render(
    <GroupDetailsHeader
      avatarUrl="https://avatars3.githubusercontent.com/u/19145173?s=460&v=4"
      groupName="Testing"
      groupMembers="Renga, Ram"
    />
  );

  it("Should Render GroupMembers And GroupName", () => {
    expect(getByText("Renga, Ram")).toBeDefined();
    expect(getByText("Testing")).toBeDefined();
  });
});
