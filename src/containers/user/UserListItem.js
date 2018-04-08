import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class UserListItem extends Component {
    render() {
        let classes = "panel-block";
        classes += this.props.active;
        return (
            <NavLink to={ "/users/" + this.props.id } className={classes}>{this.props.children}</NavLink>
        );
    }
}

export default UserListItem;