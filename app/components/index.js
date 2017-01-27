import React,{ Component } from 'react';
import ChatList from './ChatList';


export default class Class extends Component {

  render() {
    return (
        <div className="container" >
          <div className="app-wrapper" >
              <ChatList />
          </div>

        </div>
    );
  }
}
