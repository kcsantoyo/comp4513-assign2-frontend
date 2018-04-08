import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import InformationContainer from './InformationContainer.js';

class SingleUser extends Component {
    
    constructor() {
        super()
        this.state = { user: null }
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id)
        .then(response => {
            this.setState({user: response.data});
        })
        .catch(function (error) {
            alert('Error with api call ... error=' + error);
        });
    }
    
    render() {
        if(this.state.user != null){
            return(
                <div>
                    <div className="navbar">
                        <nav className="breadcrumb navbar-item" aria-label="breadcrumbs">
                            <ul>
                                <li><NavLink to={ {pathname: "/home"} }><span>Home</span></NavLink></li>
                                <li><NavLink to={ {pathname: "/users"} }><span>Users</span></NavLink></li>
                                <li className='is-active'><a href="" aria-current="page"><span>User</span></a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="container">
                        <div className="navbar">
                            <h1 className="navbar-item title is-5">{this.state.user.name}</h1>
                        </div>
                        <InformationContainer user={this.state.user} />
                    </div>
                </div>
                )
        }
        else {
            return null;
            }
    }
}
export default SingleUser;
