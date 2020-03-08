import React from "react";
import MessageInput from "../../components/MessageInput";
import MyMessage from "../../components/MyMessage";
import OthersMessage from "../../components/OthersMessage";
import GroupDetailHeader from "../../components/GroupDetailHeader";

const Messages = () => {
  return (
    <div className="flex flex-1 flex-col h-full">
      <GroupDetailHeader
        groupName="First Group"
        groupMembers="dskdskl, dskkdsklds, dksdkklsd"
        avatarUrl="https://avatars3.githubusercontent.com/u/19145173?s=460&v=4"
      />
      <div className="flex flex-1 m-4 overflow-hidden">
        <div className="py-4 flex-1 flex flex-col-reverse overflow-scroll">
          <MyMessage name="Renga" message="MyMEssage" time="10/21" />
          <MyMessage name="Renga" message="MyMEssage" time="10/21" />
          <OthersMessage name="Renga" message="MyMEssage" time="10/21" />
          <OthersMessage name="Renga" message="MyMEssage" time="10/21" />
          <OthersMessage name="Renga" message="MyMEssage" time="10/21" />
          <OthersMessage name="Renga" message="MyMEssage" time="10/21" />
          <OthersMessage name="Renga" message="MyMEssage" time="10/21" />
          <MyMessage name="Renga" message="MyMEssage" time="10/21" />
          <MyMessage name="Renga" message="MyMEssage" time="10/21" />
          <MyMessage name="Renga" message="MyMEssage" time="10/21" />
        </div>
      </div>
      <MessageInput onChangeText={() => {}} />
    </div>
  );
};

export default Messages;
