import React from "react";

interface MyMessageProps {
  name: string;
  message: string;
  imageUrl?: string;
  time: string;
}

const MyMessageProps = React.memo((props: MyMessageProps) => {
  const { name, message, imageUrl, time } = props;
  return (
    <div className="flex m-2 flex-row-reverse relative">
      <div className="bg-purple-500 p-2 rounded-lg max-w-xs md:max-w-lg">
        <p className="text-lg pb-2 text-black">{name}</p>
        <div className="flex flex-col items-end">
          {imageUrl && (
            <img className="self-center my-2 w-48 h-48" src={imageUrl} />
          )}
          <span className="text-white">{message}</span>
        </div>
      </div>
      <span className="text-xs time absolute text-white">{time}</span>
      <style jsx>{`
        .time {
          top: 5px;
          right: 10px;
        }
      `}</style>
    </div>
  );
});

MyMessageProps.displayName = "MyMessageProps";

export default MyMessageProps;
