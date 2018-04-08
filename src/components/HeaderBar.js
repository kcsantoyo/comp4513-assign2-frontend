import React, { Component } from 'react';
import NavMenu from './NavMenu.js'

class HeaderBar extends Component {
    
    render() {
        //borrowed from https://bulma.io/documentation/components/navbar/
        document.addEventListener('DOMContentLoaded', function () {
        var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        if ($navbarBurgers.length > 0) {
            $navbarBurgers.forEach(function ($el) {
                $el.addEventListener('click', function () {
                    var target = $el.dataset.target;
                    var $target = document.getElementById(target);
                    $el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                
                });
            });
        }

        });
        //end of borrowed code
        return (
            <nav>
                <div className="navbar is-info" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand is-pulled-left">
                        <h1 className="navbar-item">Assignment 1</h1>
                    </div>
                    <div className="navbar-burger" data-target="navMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="navbar-menu" id="navMenu">
                        <div className="navbar-end">
                            <NavMenu />
                        </div>
                    </div>
                </div>
            </nav>
            );
    }
}

export default HeaderBar;