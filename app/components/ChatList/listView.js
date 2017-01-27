import React,{ Component } from 'react';
import ListViewRow from './listViewRow';
export default class ListView extends Component {

  render() {
    const noOfItems = [1,2,3,4,5,5,6,7,8,9,0,12,1,2,2,2,10];
    return (
      <div className="list-view">
          {noOfItems.map((item,index) => <ListViewRow key={`${index}listRow`} />)}
      </div>
    );
  }
}
