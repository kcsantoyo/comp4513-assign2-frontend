import React, { Component } from 'react';
import stocks from '../../data/stocks.json';
import { NavLink } from 'react-router-dom';


class SingleStock extends Component {
    render() {
        let stockList = stocks;
        let symbol = this.props.match.params.symbol;
        let stock = stockList.find((stock) => stock.symbol === symbol);
        
        return(
            <div>
                <div className="navbar">
                    <nav className="breadcrumb navbar-item" aria-label="breadcrumbs">
                        <ul>
                            <li><NavLink to={ {pathname: "/home"} }><span>Home</span></NavLink></li>
                            <li><NavLink to={ {pathname: "/stocks"} }><span>Stocks</span></NavLink></li>
                            <li className='is-active'><a href="" aria-current="page"><span>Stock</span></a></li>
                        </ul>
                    </nav>
                </div>
                <div className="container">
                    <div className="navbar">
                        <h1 className="navbar-item title is-5">{stock.name}</h1>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <figure id="single-stock-logo" >
                              <img src={"/logos/" + stock.symbol + ".svg"} alt="logo"/>
                            </figure>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td><strong>Symbol:</strong></td>
                                        <td>{stock.symbol}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Sector:</strong></td>
                                        <td>{stock.sector}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Sub-Industry:</strong></td>
                                        <td>{stock.subIndustry}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Address:</strong></td>
                                        <td>{stock.address}</td>
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
export default SingleStock;