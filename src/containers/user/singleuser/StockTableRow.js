import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StockTableRow extends Component {
    render() {
        return(
            <tr>
                <td>{this.props.stock.symbol}</td>
                <td><Link to={"/stocks/"+ this.props.stock.symbol}>{this.props.stock.name}</Link></td>
                <td>{this.props.stock.amount}</td>
            </tr>
            )
    }
}
export default StockTableRow;