import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class StockListItem extends Component {
    render() {
        let classes = "panel-block columns";
        classes += this.props.active;
        return(
            <NavLink to={ "/stocks/" + this.props.symbol } className={classes}>
                <figure className="is-128x128 column is-2">
                    <img src={"/logos/" + this.props.symbol + ".svg"} alt="Company Logo" />
                </figure>
                <p className="column is-2">{this.props.children}</p>
                <div className="column"/>
            </NavLink>
            );
    }
}

export default StockListItem;