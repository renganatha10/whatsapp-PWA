import React from "react";

interface OthersMessageProps {
  name: string;
  message: string;
  imageUrl?: string;
  time: string;
}

const OthersMessage = React.memo((props: OthersMessageProps) => {
  const { name, message, imageUrl, time } = props;
  return (
    <div className="flex m-2">
      <div className="relative bg-white p-2 rounded-lg max-w-xs md:max-w-lg">
        <p className="text-lg pb-2 text-purple-500">{name}</p>
        <div className="flex flex-col items-start">
          {imageUrl && (
            <img className="self-center my-2 w-48 h-48" src={imageUrl} />
          )}
          <span>{message}</span>
        </div>
        <span className="text-xs time absolute">{time}</span>
      </div>
      <style jsx>{`
        .time {
          top: 5px;
          right: 10px;
        }
      `}</style>
    </div>
  );
});

OthersMessage.displayName = "OthersMessage";

export default OthersMessage;
