import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AboutUs extends Component {
    
    render() {
        return(
            <div>
                <div className="navbar">
                    <nav className="breadcrumb navbar-item" aria-label="breadcrumbs">
                        <ul>
                            <li><NavLink to={ {pathname: "/home"} }><span>Home</span></NavLink></li>
                            <li className='is-active'><a aria-current="page"><span>About</span></a></li>
                        </ul>
                    </nav>
                </div>
                <div className="container">
                    <div className="navbar">
                            <h1 className="navbar-item title is-5">About Us</h1>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <p class="title is-4">Kim Santoyo & Dylan DCosta</p>
                        </div>
                        <div class="content">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Our names are Kim Santoyo and Dylan DCosta. This site was made for educational purposes, but much of the functionality is unimplemented, and unfinished. It was created for COMP 4513 at Mount Royal University. </td>
            
                                    </tr>
                                    <tr>
                                        <td>This site was built using React, <a href="https://fontawesome.com/">FontAwesome 5</a>, <a href="https://bulma.io/">Bulma: A CSS framework</a> and Javascript.</td>
                                        <td>This site was built using node.js, link provided: <a href="https://nodejs.org/en/download/">Node.js</a></td>
                                        <td>This website is hosted on, and provisioned by Heroku: <a href="https://www.heroku.com/">Heroku</a></td>
                                    </tr>
                                    <tr>
                                        <td>Packages used:react, react-router-dom, @fortawesome/fontawesome</td>
                                        <td>links to github repositories:</td>
                                        <td><a href="https://github.com/kcsantoyo/comp4513-assign2-frontend.git">front end code</a></td>
                                        <td><a href="https://github.com/kcsantoyo/comp4513-assign2-backend.git">back end code</a></td>
                                    </tr>
                                    <tr>
                                        <td>Used for help: <a href="https://www.w3schools.com/js/js_array_sort.asp">Sorting Arrays</a>, <a href="https://bulma.io/documentation/components/navbar/">For implementation of the Bulma Navbar Menu</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>    
            </div>
            );
        
    }
}

export default AboutUs;