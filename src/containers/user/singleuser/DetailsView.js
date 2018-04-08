import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
class DetailsView extends Component {
    
    constructor(){
        super();
        this.state = { addressClass:"card-content is-hidden", 
                       addressButton: "plus", 
                       companyClass: "card-content is-hidden", 
                       companyButton: "plus"};
        this.toggleAddress = this.toggleAddress.bind(this);
        this.toggleCompany = this.toggleCompany.bind(this);
    }
    
    toggleAddress() {
        if(this.state.addressClass === "card-content is-hidden") {
            this.setState({ addressClass: "card-content" });
            this.setState({ addressButton: "minus" })
        }
        else {
            this.setState({ addressClass: "card-content is-hidden" });
            this.setState({ addressButton: "plus" })
        }
    }
    
    toggleCompany() {
        if(this.state.companyClass === "card-content is-hidden") {
            this.setState({ companyClass: "card-content" });
            this.setState({ companyButton: "minus" })
        }
        else {
            this.setState({ companyClass: "card-content is-hidden" });
            this.setState({ companyButton: "plus" })
        }
    }
    
    render() {
        return(
            <div className="container">
                
                <table className="table">
                    <tbody>
                        <tr>
                            <td><strong>ID:</strong></td>
                            <td>{this.props.user.id}</td>
                        </tr>
                        <tr>
                            <td><strong>Email:</strong></td>
                            <td>{this.props.user.email}</td>
                        </tr>
                        <tr>
                            <td><strong>Phone:</strong></td>
                            <td>{this.props.user.phone}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <div className="card">
                        <div className="card is-primary">
                            <header className="card-header">
                                <p className="card-header-title">Address</p>
                                <a className="card-header-icon" onClick={this.toggleAddress}>
                                    <span className="icon"><FontAwesomeIcon icon={this.state.addressButton}/></span>
                                </a>
                            </header>
                            <div className={this.state.addressClass}>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td><strong>Street:</strong></td>
                                            <td>{this.props.user.address.street}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Suite:</strong></td>
                                            <td>{this.props.user.address.suite}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>City:</strong></td>
                                            <td>{this.props.user.address.city}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Zip:</strong></td>
                                            <td>{this.props.user.address.zipcode}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div>    
                    <div className="card">
                        <header className="card-header is-primary">
                            <p className="card-header-title">Company</p>
                            <a className="card-header-icon" onClick={this.toggleCompany}>
                                <span className="icon"><FontAwesomeIcon icon={this.state.companyButton}/></span>
                            </a>
                        </header>
                        <div className={this.state.companyClass}>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td><strong>Name:</strong></td>
                                        <td>{this.props.user.company.name}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Catchphrase:</strong></td>
                                        <td>{this.props.user.company.catchPhrase}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>BS:</strong></td>
                                        <td>{this.props.user.company.bs}</td>
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
export default DetailsView;