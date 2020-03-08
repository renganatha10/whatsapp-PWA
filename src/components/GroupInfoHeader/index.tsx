import React from "react";

const GroupInfoHeader = React.memo(() => {
  return (
    <div className="flex justify-start items-center px-2 bg-white">
      <button className="h-10 w-10 m-2 rounded-full">
        <img src="/icons/close.svg" alt="close" />
      </button>
      <div>
        <p>Group Info</p>
      </div>
    </div>
  );
});

GroupInfoHeader.displayName = "GroupInfoHeader";

export default GroupInfoHeader;
