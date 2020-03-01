import React from "react";

interface GroupPros {
  imageUrl: string;
  heading: string;
  time: string;
  firstMessage: string;
}

const Group = React.memo((props: GroupPros) => {
  const { imageUrl, heading, time, firstMessage } = props;
  return (
    <div className={"mx-2 flex items-center"}>
      <img
        className={"h-10 w-10 m-3 rounded-full"}
        src={imageUrl}
        alt={`${heading} image`}
      />
      <div className={"flex-1 py-2 border-gray-400 border-b truncate"}>
        <div className={"flex justify-between items-baseline"}>
          <div>
            <span className={"font-bold text-lg"}>{heading}</span>
          </div>
          <div>
            <span className={"text-xs"}>{time}</span>
          </div>
        </div>
        <span className={"text-sm font-light"}>{firstMessage}</span>
      </div>
    </div>
  );
});

Group.displayName = "Group";

export default Group;
