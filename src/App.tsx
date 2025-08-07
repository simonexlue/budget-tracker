import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigationbar from './components/Navigationbar';
import Expenses from './pages/Expenses';
import Income from './pages/Income';
import './App.css';

const App: React.FC = () => (
  <Router>
    <div className="app-container">
      <Navigationbar />
      <div className="main-content">
        <Routes>
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/income" element={<Income />} />
        </Routes>
      </div>
    </div>
  </Router>
      
)

export default App;
