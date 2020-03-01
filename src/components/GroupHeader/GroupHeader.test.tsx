import React from "react";
import { render } from "@testing-library/react";
import GroupHeader from "./index";

describe("Group Header Test", () => {
  it("Should Group Header Text", () => {
    const avatarUrl =
      "https://avatars3.githubusercontent.com/u/19145173?s=460&v=4";
    const { getAllByRole } = render(<GroupHeader avatarUrl={avatarUrl} />);

    const images = getAllByRole("img").find(
      (item: HTMLImageElement) => item.alt === "My Image"
    ) as HTMLImageElement;

    expect(images.src).toBe(avatarUrl);
  });
});
