import React, { Component } from 'react';


class AppBar extends Component {
  render() {
    return (
        <div className="chat-navbar" >
          <button onClick={this.props.closeContact} >
            Close
          </button>
          Contact Info
        </div>
    );
  }
}

AppBar.propTypes = {
  closeContact: React.PropTypes.func
};

export default AppBar;
