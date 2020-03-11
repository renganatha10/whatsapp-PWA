import React from "react";
import dayjs from "dayjs";
import { ListChildComponentProps } from "react-window";

import Group from "../../components/Group";

import * as constants from "../../store/groups/constants";

interface Props extends ListChildComponentProps {
  data: constants.Group[];
}

const GroupItem = (props: Props) => {
  const { data, style, index } = props;
  const group = data[index];
  const { id, latestMessage, name, imageUrl, createdTime } = group;
  const time = dayjs(createdTime).format("DD/MM/YY HH:mm");
  return (
    <Group
      id={id}
      firstMessage={latestMessage}
      style={style}
      heading={name}
      imageUrl={imageUrl}
      time={time}
    />
  );
};

export default GroupItem;
