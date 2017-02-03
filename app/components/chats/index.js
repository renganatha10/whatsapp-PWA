import React,{ Component } from 'react';
import AppBar from './appBar';
import ChatContent from './chatContainer';
import Composer from './Composer';

export default class Chat extends Component {

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
