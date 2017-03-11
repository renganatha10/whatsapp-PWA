import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';


class Dialog extends Component {
  constructor(props) {
    super(props);
    this.closePopUp = this.closePopUp.bind(this);
    this.state = {
      close: false
    };
  }


  closePopUp() {
    this.setState({ close: true }, () => {
      setTimeout(() => {
        this.props.closePopUp();
      }, 1000);
    });
  }

  render() {
    const { open, imageSrc } = this.props;
    const { close } = this.state;
    return (
        <div className={classnames({ dialog: open, 'dialog-hidden': !open })}>
            <div className="dialog-header" >
                <div className="">
                  <img
                    src={imageSrc}
                    className="dialog-avatar-header"
                  />
                  <span>Renga</span>
                </div>
                <div>
                  <button
                    className="dialog-header-close"
                    onClick={this.closePopUp} >
                    Close
                  </button>
                </div>
            </div>
            <div className="dialog-body" >
              {open ? <img src={imageSrc}
                className={classnames({
                  'dialog-body-image': !close,
                  'dialog-body-image-hidden': close
                })}
              /> : null}
            </div>
        </div>
    );
  }
}


Dialog.propTypes = {
  open: PropTypes.bool,
  closePopUp: PropTypes.func,
  imageSrc: PropTypes.string
};

Dialog.defaultProps = {
  open: false,
  animationDuration: 200,
};

export default Dialog;
