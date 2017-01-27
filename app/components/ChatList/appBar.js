import React,{ Component } from 'react';
import AvartarImage from './../Shared/avatar';
import MessageIcon from './../Shared/Icons/Message';
import MoreVert from './../Shared/Icons/MoreVert';
export default class AppBar extends Component {

  render() {
    return (
        <div className="navbar">
            <div className="flex-75" >
              <AvartarImage />
            </div>
            <div className="flex flex-25 justify-content-center" >
              <button>
                <MessageIcon />
              </button>
              <button>
                <MoreVert />
              </button>
            </div>
        </div>
    );
  }
}
