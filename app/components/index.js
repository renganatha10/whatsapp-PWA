import React, { Component } from 'react';
import ChatList from './ChatList';
import Chats from './Chats';
import Details from './Details';

class App extends Component {

  render() {
    return (
        <div className="container" >
          <div className="app-wrapper" >
              <ChatList />
              <Chats />
              <Details />
          </div>

        </div>
    );
  }
}

export default App;
