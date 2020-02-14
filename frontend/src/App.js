import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Accordion, Card, Header, Collapse, Toggle, Body, Button } from 'react-bootstrap';


function App() {

  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="App">
        {
          numbers.map((number) => 
          <li>{number}</li>
          )
        }
    </div>
  );
}

export default App;
