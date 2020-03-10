import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FixedSizeList as List } from "react-window";

import GroupInfoHeader from "../../components/GroupHeader";
import GroupSearch from "../../components/GroupSearch";

import * as constants from "../../store/groups/constants";

import GroupItem from "./GroupsItem";

interface Props {
  groups: constants.Group[];
  loading: boolean;
}

const Groups = (props: Props) => {
  const { groups, loading } = props;
  const [rowHeight, setRowHeight] = useState(690);

  useEffect(() => {
    if (window) {
      setRowHeight(window.innerHeight - 120);
    }
  }, []);

  return (
    <>
      <GroupInfoHeader avatarUrl="https://avatars3.githubusercontent.com/u/19145173?s=460&v=4" />
      <GroupSearch />
      {!loading && (
        <List
          itemData={groups}
          height={rowHeight}
          itemCount={groups.length}
          width={"100%"}
          itemSize={68}>
          {GroupItem}
        </List>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    groups: state.groups.data,
    loading: state.groups.loading
  };
};

export default connect(mapStateToProps)(Groups);
