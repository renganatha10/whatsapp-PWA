import React,{ Component } from 'react';
import AppBar from './appBar';
import SearchBox from './searchBox';
import ListView from './listView';

export default class ChatList extends Component {
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
