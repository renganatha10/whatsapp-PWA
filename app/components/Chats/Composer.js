import React, { Component } from 'react';
import SmileIcon from './../Shared/Icons/Smile';
import MicIcon from './../Shared/Icons/Mic';


class Composer extends Component {
  render() {
    return (
        <div className="composer-container">
          <div className="emoji-icon" >
            <SmileIcon />
          </div>
          <div className="composer-input-container" >
            <div>
              <input placeholder="Type a Message" type="text" ></input>
            </div>
          </div>
          <div className="mic-icon" >
            <MicIcon />
          </div>
        </div>
    );
  }
}

export default Composer;
