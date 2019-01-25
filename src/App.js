import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import SignUpPage from './components/SignUp/signUp-page.component';
import LoginForm from './components/Login/login-form.component'
import NavBar from './components/Navbar/navbar.component';


class App extends Component {
  render() {
    return (
        <Router>

          <div className="App container-fluid">

            <NavBar/>
            <Route path ='/' exact component={SignUpPage}/>

          </div>
        </Router>
    );
  }
}

export default App;
