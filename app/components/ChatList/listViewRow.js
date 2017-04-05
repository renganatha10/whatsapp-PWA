import React, { Component } from 'react';
import AvartarImage from './../Shared/AvatarImage';
import { connect } from 'react-redux';
import { selectChat } from './../../redux/actions/routes';


class ListViewRow extends Component {
  constructor(props) {
    super(props);
    this._selectChat = this._selectChat.bind(this);
  }

  _selectChat() {
    this.props.selectChat();
  }


  render() {
    return (
        <div onClick={this._selectChat} className="list-row ">
            <div className="flex" >
              <div className="flex avatar-container flex-15" >
                <AvartarImage />
              </div>
              <div className="chat-body flex-85 flex flex-direction-column justify-content-center">
                <div className="flex justifiy-content-space-between alignItems-center" >
                  <span>Mepco Guys</span>
                  <span>10.33 PM</span>
                </div>
                <div className="flex alignItems-center " >
                  <span>+91 9839403049 HI this is renga</span>
                  <span></span>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  selectChat: () => dispatch(selectChat())
});

ListViewRow.propTypes = {
  selectChat: React.PropTypes.func
};

export default connect(null, mapDispatchToProps)(ListViewRow);
