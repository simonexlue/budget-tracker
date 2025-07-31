import React from 'react';
import Navigationbar from './components/Navigationbar';
import Expenses from './pages/Expenses';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Expenses />
    </div>
  );
}

export default App;
