import * as React from "react";
import { storiesOf } from "@storybook/react";
import TimeBatch from ".";

storiesOf("TimeBatch", module).add("TimeBatch", () => {
  return <TimeBatch time={"10.50 PM"} />;
});
