import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

import Grid from './components/System/Grid/Grid'
import Navigation from './components/System/Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Grid />
      </Router>
    </div>
  );
}

export default App;
