import React, { useState } from 'react';
import Header from './header';
import '../css/uvlevel.css';
import victoriaLocations from '../data/victoria_location.json';

function UVLevels() {
  const [postcode, setPostcode] = useState('');
  const [uvLevel, setUvLevel] = useState('');

  const handleSearch = () => {
    const location = victoriaLocations.find(loc => loc.Postcode === postcode);
    if (location) {
      setUvLevel('5 (Moderate)');
    } else {
      setUvLevel('Postcode not found');
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <div>
      <Header/>
      <div className="center-container">
        <div className="uvlevel-heading">
            UV Index in your area
          </div>
          <div className='info'>
          <h6>Please type in your postcode to search the UV Index</h6>
          <input value={postcode} onChange={(e) => setPostcode(e.target.value)} onKeyPress={handleKeyPress} ></input>
          <button onClick={handleSearch}>Search</button>
          <h6>Note: Just enter the postcode only</h6>
          {uvLevel && <div>UV Level: {uvLevel}</div>}
          </div>
      </div>
    </div>
  );
}

export default UVLevels;
