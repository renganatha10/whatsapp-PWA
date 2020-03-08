import React from "react";

interface UserDescriptionProps {
  phonoNumber: string;
  description: string;
}

const UserDescription = React.memo((props: UserDescriptionProps) => {
  const { phonoNumber, description } = props;
  return (
    <div className="p-4 w-full">
      <p className="text-md text-purple-500 py-1">About And Phone Number</p>
      <p className="text-sm py-3 border-purple-500 border-b">{description}</p>
      <p className="text-sm py-3 border-purple-500 border-b">{phonoNumber}</p>
    </div>
  );
});

UserDescription.displayName = "UserDescription";

export default UserDescription;
