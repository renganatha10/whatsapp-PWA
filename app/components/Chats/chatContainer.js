import React,{ Component } from 'react';
import TextBubble from './ChatSubComponents/TextBubble';
import ChatBubble from './ChatSubComponents';

export default class ChatContainer extends Component {

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
