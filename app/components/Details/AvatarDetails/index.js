import React, { Component } from 'react';
import Avatar from './Avatar';
import Details from './Details';


class AvatarDetails extends Component {
  render() {
    return (
        <div className="avatar-details">
            <Avatar />
            <Details />
        </div>
    );
  }
}

export default AvatarDetails;
