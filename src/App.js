import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Password from './components/password';
import Dashboard from './components/dashboard'; 
import UVImpact from './components/impact';
import Sunprotect from './components/sunprotect';
import UseSunscreen from './components/use-sunscreen';
import UVLevels from './components/uvlevel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Password />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/uvlevel" element={<UVLevels />} />
        <Route path="/impact" element={<UVImpact />} />
        <Route path="/sunprotect" element={<Sunprotect />} />
        <Route path="/use-sunscreen" element={<UseSunscreen />} />
      </Routes>
    </Router>
  );
}

export default App;
