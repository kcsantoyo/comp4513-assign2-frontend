import React, { Component } from 'react';
import DetailsView from './DetailsView.js';
import PortfolioView from './PortfolioView.js';

class InformationContainer extends Component {
    
    constructor() {
        super();
        this.state = { details:true, portfolio: false };
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({details: !this.state.details, portfolio: !this.state.portfolio})
    }
    
    renderDetails() {
        return(
            <div className="container">
                <div className="tabs is-toggle is-fullwidth is-large">
                    <ul>
                        <li id="details" className="is-active">
                        <a><span>Details</span></a>
                        </li>
                        <li id="portfolio" onClick={this.toggle}>
                        <a><span>Portfolio</span></a>
                        </li>
                    </ul>
                </div>
                <div>
                    <DetailsView user={this.props.user} />
                </div>
            </div>
            )    
    }
    renderPortfolio(){
        return(
            <div className="container">
                <div className="tabs is-toggle is-fullwidth is-large">
                    <ul>
                        <li id="details" onClick={this.toggle}>
                        <a><span>Details</span></a>
                        </li>
                        <li id="portfolio" className="is-active">
                        <a><span>Portfolio</span></a>
                        </li>
                    </ul>
                </div>
                <div>
                    <PortfolioView user={this.props.user} />
                </div>
            </div>
            )
    }
    
    render(){
        if(this.state.details){
            return this.renderDetails();
        }
        else if(this.state.portfolio)
        {
            return this.renderPortfolio();
        }
        else {
            return null;
        }
    }
}

export default InformationContainer;