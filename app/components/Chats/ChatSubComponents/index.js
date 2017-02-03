import React,{ Component } from 'react';

export default class ChatBubble extends Component {

  render() {
    const { children, className } = this.props;
    return (
            <div className="bubble-container" >
              <div className={className}>
                  {children}
              </div>
            </div>
    );
  }
}

ChatBubble.propTypes = {
  children : React.PropTypes.node,
  className: React.PropTypes.string
};
