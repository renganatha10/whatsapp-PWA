import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatList from './ChatList';
import Details from './Details';
import Dialog from './Dialog';
import { hidePopup } from './../redux/actions/dialog';


class App extends Component {
  render() {
    const { open, image } = this.props.dialog;
    return (
        <div className="container" >
          <div className="app-wrapper" >
              <ChatList />
              {/* <Chats /> */}
              <Details />
              {open ? <Dialog
                open={open}
                imageSrc={image}
                closePopUp={this.props.hidePopup} /> : null}
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  dialog: state.dialog
});

const mapDispatchToProps = dispatch => ({
  hidePopup: () => dispatch(hidePopup())
});

App.propTypes = {
  dialog: React.PropTypes.object,
  hidePopup: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
