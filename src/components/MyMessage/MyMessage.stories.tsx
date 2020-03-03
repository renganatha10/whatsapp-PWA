import React from "react";
import { storiesOf } from "@storybook/react";
import MyMessage from ".";

storiesOf("MyMessage", module).add("MyMessage Info", () => {
  return (
    <MyMessage
      imageUrl={"https://avatars3.githubusercontent.com/u/19145173?s=460&v=4"}
      name={"CRED"}
      message={
        "Thanks for getting in touch. We request you to click on the link below to connect with CRED support: https://cred.onelink.me/k63y/support"
      }
      time={"10.50 PM"}
    />
  );
});
