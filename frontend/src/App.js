import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header'
import Menu from './menu'
import Home from './component/home'
import About from './component/about'
import services from './component/services';
import contactus from './component/contactus';
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
        <Route path="/services" component={services} />  
        <Route path="/contactus" component={contactus} />  
      </div>
    </Router>
  );
}

export default App;
