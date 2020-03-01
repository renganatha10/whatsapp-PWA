import React from "react";
import { render } from "@testing-library/react";
import Group from ".";

describe("Button Test", () => {
  it("Should Render Group", () => {
    const { getByText } = render(
      <Group
        imageUrl={"https://avatars3.githubusercontent.com/u/19145173?s=460&v=4"}
        heading={"CRED"}
        firstMessage={
          "Thanks for getting in touch. We request you to click on the link below to connect with CRED support: https://cred.onelink.me/k63y/support"
        }
        time={"10.50 PM"}
      />
    );

    expect(
      getByText(
        "Thanks for getting in touch. We request you to click on the link below to connect with CRED support: https://cred.onelink.me/k63y/support"
      )
    ).toBeDefined();

    expect(getByText("CRED")).toBeDefined();
  });
});
