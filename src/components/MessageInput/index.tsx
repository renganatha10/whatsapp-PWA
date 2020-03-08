import React, { useCallback, memo, useState } from "react";

interface MessageInputProps {
  onChangeText: (text: string) => void;
}

const MessageInput = memo((props: MessageInputProps) => {
  const { onChangeText } = props;

  const [searchText, setSearchText] = useState("");

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setSearchText(value);
      onChangeText(value);
    },
    [searchText]
  );

  return (
    <div className="relative justify-between flex bg-white p-2">
      <img className="px-2" src="/icons/insert_emoticon.svg" alt="Emoticons" />
      <input
        className="bg-white px-4 py-2 focus:outline-none focus:shadow-outline border border-gray-400 rounded-full block w-full appearance-none leading-normal"
        onChange={onChange}
        value={searchText}
        type="text"
        placeholder="Search..."></input>
      <img className="px-2" src="/icons/send.svg" alt="Send" />
    </div>
  );
});

MessageInput.displayName = "MessageInput";

export default MessageInput;
