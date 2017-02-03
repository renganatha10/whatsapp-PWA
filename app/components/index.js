import React,{ Component } from 'react';
import ChatList from './ChatList';
import Chats from './Chats';

export default class Class extends Component {

  render() {
    return (
        <div className="container" >
          <div className="app-wrapper" >
              <ChatList />
              <Chats />
          </div>

        </div>
    );
  }
}
