import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showPopUp } from './../../../redux/actions/dialog';


const imageSrc = 'https://scontent.fmaa2-1.fna.fbcdn.net/v/t31.0-8/12304219_10206467214857601_5183926693138406305_o.jpg?oh=552a60ccaed6e1b306e8f2beb927ac1f&oe=5905E954';


class Avatar extends Component {
  constructor(props) {
    super(props);
    this.onAvatarClick = this.onAvatarClick.bind(this);
  }

  onAvatarClick(e) {
    const { x, y } = e.nativeEvent;
    this.props.dispatch(showPopUp(imageSrc, x, y));
  }

  render() {
    return (
      <a href="#" onClick={this.onAvatarClick} >
        <img src={imageSrc} className="avatar-image-big" />
      </a>

    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
});

Avatar.propTypes = {
  dispatch: React.PropTypes.func
};

export default connect(null, mapDispatchToProps)(Avatar);
