import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
                <article className="section columns">
                    
                    <NavLink className="column" to={ {pathname: "/users"}}>
                    <div className="card">
                        <header className="card-header">
                        <p className="card-header-title">Users</p>
                        </header>
                        <div className="card-content">
                            <p>Browse users in our system</p>
                        </div>
                    </div>
                    </NavLink>
                    
                    <NavLink className="column" to={ {pathname: "/stocks"}}>
                    <div className="card">
                        <header className="card-header">
                        <p className="card-header-title">Stocks</p>
                        </header>
                        <div className="card-content">
                            <p>Browse stocks in our system</p>
                        </div>
                    </div>
                    </NavLink>
                    
                    <NavLink className="column" to={ {pathname: "/about"}}> 
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">About Us</p>
                        </header>
                        <div className="card-content">
                            <p>Learn more about our system</p>
                        </div>
                    </div>
                    </NavLink>
                    
                </article>
            );
    }
}

export default Home;