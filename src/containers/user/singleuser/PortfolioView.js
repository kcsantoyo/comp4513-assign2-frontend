import React, { Component } from 'react';
import stocks from '../../../data/stocks.json';
import userStocks from '../../../data/userStockPortfolio.json';
import StockTableRow from './StockTableRow.js';

class PortfolioView extends Component {
    constructor(props){
        super(props);
        this.state = {orderBy: "name", order: "desc"};
        this.changeOrderName = this.changeOrderName.bind(this);
        this.changeOrderAmount = this.changeOrderAmount.bind(this);
        this.changeOrderSymbol = this.changeOrderSymbol.bind(this);
    }
    
    changeOrderName() {
        if(this.state.orderBy === "name"){
            if(this.state.order === "desc"){
                this.setState({order: "asc"})
            }
            else {
                this.setState({order: "desc"})
            }
        }
        else {
            this.setState({orderBy: "name", order: "desc"})
        }    
    }
    
    changeOrderSymbol(list) {
        if(this.state.orderBy === "symbol"){
            if(this.state.order === "desc"){
                this.setState({order: "asc"})
            }
            else {
                this.setState({order: "desc"})
            }
        }
        else {
            this.setState({orderBy: "symbol", order: "desc"})
        }
    }
    
    changeOrderAmount() {
        if(this.state.orderBy === "amount"){
            if(this.state.order === "desc"){
                this.setState({order: "asc"})
            }
            else {
                this.setState({order: "desc"})
            }
        }
        else {
            this.setState({orderBy: "amount", order: "desc"})
        }
    }
    
    render() {
        let newStockList = [];
        let user = this.props.user;
        
        let portfolio = userStocks.filter(function(userStock){ return userStock.userId === user.id });
            
        let listInd = 0;
        for(var i = 0; i < portfolio.length; i++) {
            for(var j = 0; j < stocks.length; j++) {
                if(portfolio[i].symbol === stocks[j].symbol){
                    newStockList[listInd] = { symbol: stocks[i].symbol, name: stocks[i].name, amount: portfolio[i].amount }
                    listInd++;
                }
            }
        }
        
        if(this.state.orderBy === "name" && this.state.order === "desc"){
            newStockList.sort(function(a, b)
                    {
                        var x = a.name.toLowerCase();
                        var y = b.name.toLowerCase();
                        if (x < y) {return -1;}
                        if (x > y) {return 1;}
                        return 0;
                    }
            );
        }
        else if(this.state.orderBy === "name" && this.state.order === "asc"){
            newStockList.sort(function(a, b)
                    {
                        var x = a.name.toLowerCase();
                        var y = b.name.toLowerCase();
                        if (x > y) {return -1;}
                        if (x < y) {return 1;}
                        return 0;
                    }
            );
        }
        else if(this.state.orderBy === "amount" && this.state.order === "desc"){
            newStockList.sort(function(a, b)
                    {
                        var x = a.amount;
                        var y = b.amount;
                        if (x > y) {return -1;}
                        if (x < y) {return 1;}
                        return 0;
                    }
            );
        }
        else if(this.state.orderBy === "amount" && this.state.order === "asc"){
            newStockList.sort(function(a, b)
                    {
                        var x = a.amount;
                        var y = b.amount;
                        if (x < y) {return -1;}
                        if (x > y) {return 1;}
                        return 0;
                    }
            );
        }
        else if(this.state.orderBy === "symbol" && this.state.order === "desc"){
            newStockList.sort(function(a, b)
                    {
                        var x = a.symbol.toLowerCase();
                        var y = b.symbol.toLowerCase();
                        if (x < y) {return -1;}
                        if (x > y) {return 1;}
                        return 0;
                    }
            );
        }
        else if(this.state.orderBy === "symbol" && this.state.order === "asc"){
            newStockList.sort(function(a, b)
                    {
                        var x = a.symbol.toLowerCase();
                        var y = b.symbol.toLowerCase();
                        if (x > y) {return -1;}
                        if (x < y) {return 1;}
                        return 0;
                    }
            );
        }
        
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th id="order" onClick={this.changeOrderSymbol}>Symbol</th>
                            <th id="order" onClick={this.changeOrderName}>Name</th>
                            <th id="order" onClick={this.changeOrderAmount}>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newStockList.map((stock, index) => {
                                return(
                                    <StockTableRow stock={stock}/>
                                );
                            })
                        }
                    </tbody>
                </table>
                
            </div>
        );
    }
}
export default PortfolioView;