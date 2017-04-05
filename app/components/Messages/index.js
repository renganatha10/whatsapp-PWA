import React, { Component } from 'react';
import AppBar from './AppBar';
import ChatContent from './ChatContainer';
import Composer from './Composer';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { selectDetails } from './../../redux/actions/routes';


class Messages extends Component {
  render() {
    const { routeName } = this.props;
    return (
      <div className={classnames('chat-pane',
                      { 'chat-close': routeName === 3 })}>
        <AppBar selectDetails ={this.props.selectDetails}/>
        <ChatContent />
        <Composer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  routeName: state.routes.routeName
});

Messages.propTypes = {
  routeName: React.PropTypes.number,
  selectDetails: React.PropTypes.func
};

const mapDispatchToProps = dispatch => ({ selectDetails: () => dispatch(selectDetails()) });

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
