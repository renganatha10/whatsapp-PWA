import React,{ Component } from 'react';
import SearchIcon from './../../components/Shared/Icons/Search';

export default class SearchBox extends Component {

  render() {
    return (
            <div className="searchBox">
                <div className="searchContainer"  >
                  <div className="flex flex-10 center-align " >
                    <SearchIcon />
                  </div>
                  <div className="flex-80">
                    <input className="input-box"  type="text"  placeholder="Search or start new chat" />
                  </div>
                  <div className="flex-10" >

                  </div>
                </div>
            </div>
    );
  }
}
