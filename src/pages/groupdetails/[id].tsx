import React from "react";
import Groups from "../../containers/Groups";
import Messages from "../../containers/Messages";
import GroupDetails from "../../containers/GroupDetails";

const GroupDetailsPage = () => {
  return (
    <div className="main bg-purple-500 lg:px-16">
      <main className="container flex h-full bg-gray-300">
        <div className="lg:w-1/4 hidden lg:block border-r h-full border-gray-400 border-solid">
          <Groups />
        </div>
        <div className="lg:w-2/4 hidden lg:block border-r border-gray-400 border-solid">
          <Messages />
        </div>
        <div className="lg:w-1/4 w-full w-full h-full border-r border-gray-400 border-solid">
          <GroupDetails />
        </div>
      </main>
    </div>
  );
};

export default GroupDetailsPage;
