import React from "react";

interface GroupPros {
  imageUrl: string;
  heading: string;
  time: string;
  firstMessage: string;
  style: React.CSSProperties;
}

const Group = React.memo((props: GroupPros) => {
  const { imageUrl, style, heading, time, firstMessage } = props;
  return (
    <button style={style}>
      <div className={"mx-2 flex items-center"}>
        <img
          className={"h-8 w-8 m-3 rounded-full"}
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
          <p className={"text-sm text-left truncate font-light"}>
            {firstMessage}
          </p>
        </div>
      </div>
    </button>
  );
});

Group.displayName = "Group";

export default Group;
