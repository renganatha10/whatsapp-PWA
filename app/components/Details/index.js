import React, { Component } from 'react';
import AppBar from './Appbar';
import AvatarDetails from './AvatarDetails';
import { connect } from 'react-redux';
import { closeContact } from './../../redux/actions/routes';


class DetailRoot extends Component {
  render() {
    return (
      <div className="details-pane-open">
          <AppBar closeContact={this.props.closeContact} />
          <AvatarDetails />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  route: state.route
});

const mapDispatchToProps = dispatch => ({ closeContact: () => dispatch(closeContact()) });

DetailRoot.propTypes = {
  closeContact: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailRoot);
