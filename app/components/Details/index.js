import React, { Component } from 'react';
import AppBar from './Appbar';
import AvatarDetails from './AvatarDetails';


class DetailRoot extends Component {
  render() {
    return (
      <div className="details-pane-open">
          <AppBar />
          <AvatarDetails />
      </div>
    );
  }
}

export default DetailRoot;
