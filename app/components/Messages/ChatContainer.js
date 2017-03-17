import React, { Component } from 'react';
import TextBubble from './MessagesComponent/TextBubble';
import ChatBubble from './MessagesComponent';


class ChatContainer extends Component {
  render() {
    return (
        <div className="chat-content-container">
           <div className="bubble-list">
             <ChatBubble className={'leftBubble'} >
               <TextBubble className={'hookup-left'} />
             </ChatBubble>
             <ChatBubble className={'rightBubble'} >
               <TextBubble className={'hookup-right'} />
             </ChatBubble>
           </div>
        </div>
    );
  }
}

export default ChatContainer;
