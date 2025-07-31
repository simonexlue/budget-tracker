import React from 'react';
import Navigationbar from './components/Navigationbar';
import Expenses from './pages/Expenses';
import Income from './pages/Income';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Income />
    </div>
  );
}

export default App;
