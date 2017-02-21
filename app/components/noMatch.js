import React, { Component } from 'react';
import classnames from 'classnames';


export default class NoMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
    this._openChat = this._openChat.bind(this);
    this._openDetails = this._openDetails.bind(this);
  }

  _openChat(e) {
    e.preventDefault();
    this.setState({
      showChats: true
    });
  }

  _openDetails(e) {
    e.preventDefault();
    this.setState({
      showDetails: true
    });
  }


  render() {
    const { showDetails, showChats } = this.state;
    return (
        <div id="main-sidebar" className="container" >
          <div className={classnames('chat-list-pane', { 'chat-list-close': showDetails })}>
              Chat List
              <button
                type="button"
                className="custom-button open-chat"
                onClick={this._openChat} >Open chat </button>
          </div>
          <div className={classnames('chat-pane', { 'chat-close': showDetails || showChats })}>
              Chat
              <button
                className="custom-button"
                onClick={this._openDetails} >Open Details</button>
          </div>
          {
            this.state.showDetails ? <div className="details-pane-open">
                Details
            </div> : <div className="details-pane">
                Details
            </div>
          }

        </div>
    );
  }
}
