import React from "react";
import GroupInfoHeader from "../../components/GroupInfoHeader";
import GroupInfoAvatar from "../../components/GroupInfoAvatar";
import GroupDescription from "../../components/GroupDescription";

const GroupDetails = () => {
  return (
    <div>
      <GroupInfoHeader />
      <GroupInfoAvatar
        avatarUrl="https://avatars3.githubusercontent.com/u/19145173?s=460&v=4"
        createdAt="10.31 PM"
        groupName="Name"
      />
      <GroupDescription description={"I am good"} />
    </div>
  );
};

export default GroupDetails;
