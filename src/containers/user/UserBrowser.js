import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import UserListItem from './UserListItem.js';
import axios from 'axios';

class UserBrowser extends Component {
    constructor(props) {
        super(props);
        this.state={ currentUserId:1, users: [] };
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({users: response.data});
        })
        .catch(function (error) {
            alert('Error with api call ... error=' + error);
        });
        
        this.state.users.sort(function(a, b){
            var x = a.type.toLowerCase();
            var y = b.type.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        }); 
    }
    
    render() {
        if(! this.state.users || this.state.users.length === 0 ) {
            return null;
        }
        else {
            
            //sorting borrowed from https://www.w3schools.com/js/js_array_sort.asp
            let userList = this.state.users
                userList.sort(function(a, b)
                    {
                        var x = a.name.toLowerCase();
                        var y = b.name.toLowerCase();
                        if (x < y) {return -1;}
                        if (x > y) {return 1;}
                        return 0;
                    }
                );
            return(
                <div>
                    <div className="navbar">
                        <nav className="breadcrumb navbar-item" aria-label="breadcrumbs">
                            <ul>
                                <li><NavLink to={ {pathname: "/home"} }><span>Home</span></NavLink></li>
                                <li className='is-active'><a aria-current="page"><span>User List</span></a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="container">
                        <div className="navbar">
                            <h1 className="navbar-item title is-5">Users</h1>
                        </div>
                        <article>
                            <nav className="panel">
                            {
                                this.state.users.map((user, index) => {
                                    let activeClass = "";
                                    return(
                                        <UserListItem key={user.id}
                                                      id={user.id}
                                                      index={index}
                                                      identifier={user.id}
                                                      active={activeClass}>{user.name}</UserListItem>
                                    );
                                }
                                )
                            }
                            </nav>
                        </article>
                    </div>
                </div>
                );
        }
    }
}

export default UserBrowser;