import React, { Component } from 'react';
import AvartarImage from './../Shared/Avatar';


class ListViewRow extends Component {
  render() {
    return (
        <div className="list-row ">
            <div className="flex" >
              <div className="flex justify-content-center flex-15" >
                <AvartarImage />
              </div>
              <div className="flex-85 flex flex-direction-column justify-content-center">
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

export default ListViewRow;
