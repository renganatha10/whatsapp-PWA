import React, { Component } from 'react';
import AppBar from './appBar';
import SearchBox from './searchBox';
import ListView from './listView';
import { connect } from 'react-redux';
import classnames from 'classnames';


class ChatList extends Component {
  render() {
    const { routeName } = this.props;
    return (
      <div className={classnames('chat-list-pane',
                      { 'chat-list-close': routeName === 3 })}>
          <AppBar />
          <SearchBox />
          <ListView />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  routeName: state.routes.routeName
});

ChatList.propTypes = {
  routeName: React.PropTypes.number,
};

export default connect(mapStateToProps, null)(ChatList);
