import React,{ Component } from 'react';

export default class MoreVertOptions extends Component {

  render() {
    return (
        <div className={this.props.className}>
            <ul className="more-vert-list-view" >
              <li>New Group</li>
              <li>Profile and Status</li>
              <li>Archived</li>
              <li>Starred</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
        </div>
    );
  }
}
