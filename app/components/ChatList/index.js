import React, { Component } from 'react';
import AppBar from './appBar';
import SearchBox from './SearchBox';
import ListView from './ListView';


class ChatList extends Component {
  render() {
    return (
      <div className="chat-list-pane chat-list-close ">
          <AppBar />
          <SearchBox />
          <ListView />
      </div>
    );
  }
}

export default ChatList;
