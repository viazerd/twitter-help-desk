import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import{library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from "@fortawesome/free-brands-svg-icons/";
import logo from './logo.png'
library.add(faTwitter);



class App extends Component {
    render() {

        return (
            <Router>
            <div className="App">
                <div className="background-image">

                <nav className="navbar sticky-top navbar-expand-lg navbar-primary bg-light">
                    <a className="navbar-brand" href="https://twitter.com/">
                        <img src={logo} width="30" height="30" alt="twitter" target="_blank"/>
                    </a>

                    <Link to="/" className="navbar-brand">Twitter Help Desk</Link>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        <ul className="navbar-nav">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Help</Link>
                            </li>
                            <li>
                                <Link to="/create" className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>

                </nav>



                    <button className=" twitterIcon shadow-lg rounded btn btn-outline-primary " >
                        <FontAwesomeIcon icon={faTwitter}
                                         size="7x"
                        />
                    </button>

                </div>

            </div>
    </Router>




        );
    }
}

export default App;
