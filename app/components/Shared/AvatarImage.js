import React, { Component } from 'react';
import AvatarImage from './../../assets/avatar.png';


class Avatar extends Component {
  render() {
    return (
      <img src={AvatarImage} className="avatar-image" />
    );
  }
}

export default Avatar;
