import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header'
import Menu from './menu'
import Home from './component/home'
import About from './component/about'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Menu/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />        
      </div>
    </Router>
  );
}

export default App;
