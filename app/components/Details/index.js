import React, { Component } from 'react';
import AppBar from './Appbar';
import AvatarDetails from './AvatarDetails';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { closeContact } from './../../redux/actions/routes';


class DetailRoot extends Component {
  render() {
    const { routeName } = this.props;
    return (
      <div className={classnames('details-pane-open',
                      { 'details-pane-close': routeName !== 3 })}>
          <AppBar closeContact={this.props.closeContact} />
          <AvatarDetails />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  routeName: state.routes.routeName
});

const mapDispatchToProps = dispatch => ({ closeContact: () => dispatch(closeContact()) });

DetailRoot.propTypes = {
  closeContact: React.PropTypes.func,
  routeName: React.PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailRoot);
