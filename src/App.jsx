import React, { useState } from 'react';
import './App.css';

import Map from './components/world-map/map';

function App() {
  return (
    <div className="App">
      <h1>Country map!</h1>
      <Map />
    </div>
  )
}

export default App;
