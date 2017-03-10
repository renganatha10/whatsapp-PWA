import React, { Component } from 'react';
import AvartarImage from './../Shared/AvatarImage';
import MoreVert from './../Shared/Icons/MoreVert';
import Search from './../Shared/Icons/Search';
import ShareIcon from './../Shared/Icons/Share';


class AppBar extends Component {
  render() {
    return (
        <div className="chat-navbar">
            <div className="chat-avatar" >
              <AvartarImage />
            </div>
            <div className="chat-details" >
              <div className="chat-title"><span>HBD Sree Kumar</span></div>
              <div className="chat-details"><span>Arun, ArunMani, Gopal, Kapilan, Karthikeyan, Komban, Kowshik, Kumar, Maaris, Mohaideen, Mohan, Nivas, Rajamani, Sakthivel, Sankar, Saravana, Sathish, Sree, Srini, Suresh, Surya, Viji, Yogesh, +31 6 87947387, +91 88701 24355, You</span></div>
            </div>
            <div className="chat-icon-container" >
              <button><Search/></button>
              <button><ShareIcon/></button>
              <button><MoreVert /></button>
            </div>
        </div>
    );
  }
}

export default AppBar;
