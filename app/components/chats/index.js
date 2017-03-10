import React, { Component } from 'react';
import AppBar from './appBar';
import ChatContent from './chatContainer';
import Composer from './Composer';


class Chat extends Component {
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

export default Chat;
