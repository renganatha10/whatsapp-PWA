import React, { Component } from 'react';
import MoreVertOptions from './MoreVertOption';
import MessageIcon from './../Shared/Icons/Message';
import MoreVert from './../Shared/Icons/MoreVert';
import AvartarImage from './../Shared/AvatarImage';
import classnames from 'classnames';


class AppBar extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      showMoreVertOption: false
    };
  }

  onClick() {
    this.setState({
      showMoreVertOption: !this.state.showMoreVertOption
    });
  }

  render() {
    const { showMoreVertOption } = this.state;
    return (
        <div className="navbar">
            <div className="flex-75 avatar-container" >
              <AvartarImage />
            </div>
            <div className="flex flex-25 justifiy-content-space-around" >
              <button>
                <MessageIcon />
              </button>
              <button onClick={this.onClick} className="more-vert" >
                 <MoreVertOptions
                   className={classnames('more-vert-option', { active: showMoreVertOption })} />
                <MoreVert />
              </button>
            </div>
        </div>
    );
  }
}

export default AppBar;
