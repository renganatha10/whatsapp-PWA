import React, { useCallback, memo, useState } from "react";

interface GroupSearchProps {
  onChangeText?: (text: string) => void;
}

const GroupSearch = memo((props: GroupSearchProps) => {
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
    <div className="relative bg-gray-300 px-4 py-2">
      <input
        className="bg-white pl-10 pr-30 py-2 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full block w-full appearance-none leading-normal"
        onChange={onChange}
        value={searchText}
        type="text"
        placeholder="Search..."></input>
      <img
        className={"search-icon absolute"}
        src="/icons/search.svg"
        alt="Search"
      />
      <style jsx>{`
        .search-icon {
          top: 20px;
          left: 26px;
          height: 18px;
          width: 18px;
        }
      `}</style>
    </div>
  );
});

GroupSearch.displayName = "GroupSearch";

export default GroupSearch;
