import React from "react";
import { render } from "@testing-library/react";
import OtherMessage from ".";

describe("My Message", () => {
  it("Should Render Name, Time And Message", () => {
    const { getByText, queryByRole } = render(
      <OtherMessage name="Renga" message="OtherMessage" time="10/21" />
    );

    expect(getByText("Renga")).toBeDefined();
    expect(getByText("OtherMessage")).toBeDefined();
    expect(getByText("10/21")).toBeDefined();
    expect(queryByRole("img")).toBeNull();
  });

  it("Should Render Image When Url is passed", () => {
    const { getByRole } = render(
      <OtherMessage
        name="Renga"
        message="OtherMessage"
        imageUrl={"https://avatars3.githubusercontent.com/u/19145173?s=460&v=4"}
        time="10/21"
      />
    );
    const imageElement = getByRole("img") as HTMLImageElement;
    expect(imageElement.src).toBe(
      "https://avatars3.githubusercontent.com/u/19145173?s=460&v=4"
    );
  });
});
