import React, { Component } from 'react';
// import logo from './logo.svg';
import './CSS/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginFB from './components/loginfb';
import axios from 'axios';
axios.defaults.withCredentials = true;

class App extends Component {
  render() {
    return (
      <div>
        <LoginFB/>
      </div>
    );
  }
}

export default App;
