import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ChatList from './ChatList';
import Dialog from './Dialog';
import { hidePopup } from './../redux/actions/dialog';


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.messageComponent = null;
    this.detailsComponent - null;
  }

  componentWillReceiveProps(nextProps) {
    const { routeName } = nextProps;
    if (this.props.routeName !== nextProps) {
      if (routeName === 2) {
        System.import('./Messages').then(Component => {
          this.messageComponent = Component.default;
          this.forceUpdate();
        });
      }
      if (routeName === 3) {
        System.import('./Details').then(Component => {
          this.detailsComponent = Component.default;
          this.forceUpdate();
        });
      }
    }
  }

  render() {
    const { open, image } = this.props.dialog;
    return (
        <div className="container" >
          <div className="app-wrapper" >
              <ChatList />
              {this.messageComponent ? <this.messageComponent /> : null}
              {this.detailsComponent ? <this.detailsComponent /> : null}
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
  dialog: state.dialog,
  routeName: state.routes.routeName
});

const mapDispatchToProps = dispatch => ({
  hidePopup: () => dispatch(hidePopup())
});

App.propTypes = {
  dialog: React.PropTypes.object,
  hidePopup: React.PropTypes.func,
  routeName: React.PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
