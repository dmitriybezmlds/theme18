import React, { Component } from 'react';
import logo1 from '../images/logo1.png';
import { NavLink } from 'react-router-dom';
class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <header className="header">
        <div className="header__wrap">
          <div className="header__logo">
            <div className="header__img">
              <img src={logo1} alt="" />
            </div>
            <div className="header__logo-text">
              <span className="header__text-up">GitHub</span>
              <span className="header__text-down">search</span>
            </div>
          </div>
          <div className="header__navi">
            <NavLink activeClassName="header__link_active-navi" to="/search" className="header__link">Search</NavLink>
            <NavLink activeClassName="header__link_active-navi" to="/mylist" className="header__link">My List</NavLink>
          </div>
        </div> 
      </header> 
     )
  }
}
 
export default MyList;
