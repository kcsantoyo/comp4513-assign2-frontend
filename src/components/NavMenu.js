import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavMenu extends Component {
    
    render() {
        return(
            <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">
                  MENU
                </div>
                    <div className="navbar-dropdown is-boxed">
                          <NavLink className="navbar-item" to={ {pathname: "/home"} }>Home</NavLink>
                          <NavLink className="navbar-item" to={ {pathname: "/users"} }>Users</NavLink>
                          <NavLink className="navbar-item" to={ {pathname: "/stocks"} }>Stocks</NavLink>
                          <NavLink className="navbar-item" to={ {pathname: "/about"} }>About</NavLink>
                    </div>
            </div>
            );     
    }
}

export default NavMenu;