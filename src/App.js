import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Password from './components/password';
import Dashboard from './components/dashboard'; 
import UVImpact from './components/impact';
import Sunprotect from './components/sunprotect';
import UseSunscreen from './components/use-sunscreen';
import Teaminfo from './components/team-info';
import UVLevels from './components/uvlevel';
import Usage from './components/sunscreen-usage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Password />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/uvlevel" element={<UVLevels />} />
        <Route path="/impact" element={<UVImpact />} />
        <Route path="/sunscreen-usage" element={<Usage />} />
        <Route path="/sunprotect" element={<Sunprotect />} />
        <Route path="/use-sunscreen" element={<UseSunscreen />} />
        <Route path="/team-info" element={<Teaminfo />} />
      </Routes>
    </Router>
  );
}

export default App;
