import React from "react";

interface GroupDetailsHeaderProps {
  avatarUrl: string;
  groupName: string;
  groupMembers: string;
}

const GroupDetailHeader = React.memo((props: GroupDetailsHeaderProps) => {
  const { avatarUrl, groupMembers, groupName } = props;
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <img
          className="h-8 w-8 m-2 rounded-full"
          src={avatarUrl}
          alt="My Image"
        />
      </div>
      <div className="flex flex-1 flex-col truncate justify-center">
        <span>{groupName}</span>
        <span className="text-xs truncate">{groupMembers}</span>
      </div>
      <div className="flex">
        <button>
          <img className="mx-3" src={"/icons/search.svg"} alt="Search" />
        </button>
        <button>
          <img
            className="mx-3"
            src={"/icons/attach_file.svg"}
            alt="Attach File"
          />
        </button>
        <button>
          <img className="mx-3" src={"/icons/more_vert.svg"} alt="More Items" />
        </button>
      </div>
    </div>
  );
});

GroupDetailHeader.displayName = "GroupDetailHeader";

export default GroupDetailHeader;
