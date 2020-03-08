import React from "react";

interface GroupInfoAvatarProps {
  avatarUrl: string;
  groupName: string;
  createdAt: string;
}

const GroupInfoAvatar = React.memo((props: GroupInfoAvatarProps) => {
  const { avatarUrl, groupName, createdAt } = props;
  return (
    <div className="flex items-center p-2 justify-center flex-col ">
      <div>
        <img
          data-testid="avatar-url"
          className="h-48 w-48 rounded-full"
          src={avatarUrl}
        />
      </div>
      <div className="flex p-4 items-center justify-between w-full">
        <div>
          <p className="text-lg">{groupName}</p>
          <p className="text-xs">{createdAt}</p>
        </div>
        <div>
          <img className="h-5 w-5" src="/icons/create.svg" />
        </div>
      </div>
    </div>
  );
});

GroupInfoAvatar.displayName = "GroupInfoAvatar";

export default GroupInfoAvatar;
