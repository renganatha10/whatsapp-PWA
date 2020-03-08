import React from "react";
import { FixedSizeList as List } from "react-window";
import GroupInfoHeader from "../../components/GroupHeader";
import Group from "../../components/Group";

const Column = ({ index, style }) => (
  <Group
    firstMessage={index}
    style={style}
    heading="dssd"
    imageUrl="https://avatars3.githubusercontent.com/u/19145173?s=460&v=4"
    time="01.23"
  />
);

//eslint-disable-next-line
const Groups = () => {
  return (
    <>
      <GroupInfoHeader avatarUrl="https://avatars3.githubusercontent.com/u/19145173?s=460&v=4" />
      <List height={750} itemCount={1000} itemSize={68}>
        {Column}
      </List>
    </>
  );
};

export default Groups;
