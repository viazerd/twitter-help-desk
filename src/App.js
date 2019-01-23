import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import SignUpPage from './components/signUp-page.component';
import LoginPage from './components/login-page.component';
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
        <Router>

          <div className="container container-fluid">
            <nav className=" navbar navbar-expand-lg navbar-light bg-light shadow-lg">
              <a className="navbar-brand" href="https://twitter.com/">
                <img src={logo} width="30" height="30" alt="twitter" target="_blank"/>
              </a>
              <Link to="/" className="navbar-brand">Twitter Help Desk</Link>
            <dive className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/createUser" className="nav-link">Log In </Link>
                </li>
              </ul>

            </dive>
            </nav>
            <Route path ='/' exact component={SignUpPage}/>
            <Route path ='/createUser/' exact component={LoginPage}/>
          </div>
       </Router>
    );
  }
}

export default App;
