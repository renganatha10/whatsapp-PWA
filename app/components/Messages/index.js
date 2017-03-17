import React, { Component } from 'react';
import AppBar from './AppBar';
import ChatContent from './ChatContainer';
import Composer from './Composer';


class Messages extends Component {
  render() {
    return (
      <div className="chat-pane chat-close">
        <AppBar />
        <ChatContent />
        <Composer />
      </div>
    );
  }
}

export default Messages;
