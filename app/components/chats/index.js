import React, { Component } from 'react';
import AppBar from './AppBar';
import ChatContent from './ChatContainer';
import Composer from './Composer';


class Chat extends Component {
  render() {
    return (
      <div className="chat-pane">
        <AppBar />
        <ChatContent />
        <Composer />
      </div>
    );
  }
}

export default Chat;
