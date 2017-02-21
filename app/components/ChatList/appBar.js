import React,{ Component } from 'react';
import MessageIcon from './../Shared/Icons/Message';
import MoreVert from './../Shared/Icons/MoreVert';
import AvartarImage from './../Shared/avatar';
import MoreVertOptions from './MoreVertOption';
import classnames from 'classnames';

export default class AppBar extends Component {
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
            <div className="flex-75" >
              <AvartarImage />
            </div>
            <div className="flex flex-25 justify-content-center" >
              <button>
                <MessageIcon />
              </button>
              <button onClick={this.onClick} className="more-vert" >
                 <MoreVertOptions
                   className={classnames('more-vert-option', { 'active': showMoreVertOption })} />
                <MoreVert />
              </button>
            </div>
        </div>
    );
  }
}
