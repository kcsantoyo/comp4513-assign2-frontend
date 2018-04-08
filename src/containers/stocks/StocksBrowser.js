import React, { Component } from 'react';
import stocks from '../../data/stocks.json';
import { NavLink } from 'react-router-dom';
import StockListItem from './StockListItem'

class StocksBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = {currentStock: 1, stockList: stocks};
    }
    
    render() {
        return(
            <div>
                <div>
                    <div className="navbar">
                        <nav className="breadcrumb navbar-item" aria-label="breadcrumbs">
                            <ul>
                                <li><NavLink to={ {pathname: "/home"} }><span>Home</span></NavLink></li>
                                <li className='is-active'><a aria-current="page"><span>Stocks</span></a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="container">
                        <div className="navbar">
                            <h1 className="navbar-item title is-5">Stocks</h1>
                        </div>
                        <article>
                            <nav className="panel">
                            {
                                stocks.map((stock, index) => {
                                    let activeClass = "";
                                    return(
                                        <StockListItem
                                                       index={index}
                                                       identifier={stock.symbol}
                                                       symbol={stock.symbol} active={activeClass}>{stock.name}</StockListItem>
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