import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class menu extends Component
{
    render(){
       return(
        <>
        <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/servides">Services</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
        </ul>
        </div>
        </>
       ) 

    }
}

export default menu;