import React from "react";

interface GroupHeaderProps {
  avatarUrl: string;
}

const GroupHeader = React.memo((props: GroupHeaderProps) => {
  const { avatarUrl } = props;
  return (
    <div className="flex justify-between">
      <div>
        <img
          className="h-10 w-10 m-2 rounded-full"
          src={avatarUrl}
          alt="My Image"
        />
      </div>
      <div className="flex">
        <button>
          <img className="mx-6" src={"/icons/donut_large.svg"} alt="Status" />
        </button>
        <button>
          <img className="mx-6" src={"/icons/message.svg"} alt="Message" />
        </button>
        <button>
          <img className="mx-6" src={"/icons/more_vert.svg"} alt="More Items" />
        </button>
      </div>
    </div>
  );
});

GroupHeader.displayName = "GroupHeader";

export default GroupHeader;
