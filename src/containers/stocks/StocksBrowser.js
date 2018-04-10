import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import StockListItem from './StockListItem'
import axios from 'axios';


class StocksBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = {currentComp: 1, compList: null};
    }
    
    componentDidMount()
    {
        axios.get('https://floating-gorge-bend.herokuapp.com/api/companies').then(
            response => { this.setState({compList : response.data}); 
                        }).catch(function(error) { alert('Error with API call...error=' + error); });
    }
    
    render() {
        return(
            <div>
                <div>
                    <div className="navbar">
                        <nav className="breadcrumb navbar-item" aria-label="breadcrumbs">
                            <ul>
                                <li><NavLink to={ {pathname: "/home"} }><span>Home</span></NavLink></li>
                                <li className='is-active'><a aria-current="page"><span>Companies</span></a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="container">
                        <div className="navbar">
                            <h1 className="navbar-item title is-5">Companies</h1>
                        </div>
                        <article>
                            <nav className="panel">
                            {
                                this.state.compList.map((comp, index) => {
                                    let activeClass = "";
                                    return(
                                        <StockListItem
                                                       index={index}
                                                       identifier={comp.symbol}
                                                       symbol={comp.symbol} active={activeClass}>{comp.name}</StockListItem>
                                    );
                                }
                                )
                            }
                            </nav>
                        </article>
                    </div>    
                </div>
            </div>
            );
    }
}

export default StocksBrowser;