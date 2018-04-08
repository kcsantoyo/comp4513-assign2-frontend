import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar.js';
import { Route } from 'react-router-dom';
import Home from './containers/Home.js';
import UserBrowser from './containers/user/UserBrowser.js';
import StocksBrowser from './containers/stocks/StocksBrowser.js';
import AboutUs from './containers/AboutUs.js';
import SingleUser from './containers/user/singleuser/SingleUser.js';
import SingleStock from './containers/stocks/SingleStock'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <Route path="/" exact component={ Home } />
        <Route path="/home" exact component={ Home } />
        <Route path="/about" exact component={ AboutUs } />
        <Route path="/users" exact component={ UserBrowser  }/>
        <Route path="/users/:id" component={ SingleUser } />
        <Route path="/stocks" exact component={ StocksBrowser } />
        <Route path="/stocks/:symbol" exact component={ SingleStock } />
      </div>
    );
  }
}

export default App;
