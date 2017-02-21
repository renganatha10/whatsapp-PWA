import React, { Component } from 'react';
import AppBar from './AppBar';
import SearchBox from './SearchBox';
import ListView from './ListView';


class ChatList extends Component {
  render() {
    return (
      <div className="chat-list-pane">
          <AppBar />
          <SearchBox />
          <ListView />
      </div>
    );
  }
}

export default ChatList;
