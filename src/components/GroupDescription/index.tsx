import React from "react";

interface GroupDescriptionProps {
  description: string;
}

const GroupDescription = React.memo((props: GroupDescriptionProps) => {
  const { description } = props;
  return (
    <div className="p-4 w-full">
      <p className="text-md text-purple-500 ">Description</p>
      <p className="text-sm py-1">{description}</p>
    </div>
  );
});

GroupDescription.displayName = "GroupDescription";

export default GroupDescription;
