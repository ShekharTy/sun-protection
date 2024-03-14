import React, { useState, useEffect } from 'react';
import Header from './header';
import victoriaLocations from '../data/victoria_location.json';
import '../css/uvlevel.css';

function UVLevels() {
  const [postcode, setPostcode] = useState('');
  const [uvLevel, setUvLevel] = useState('');
  useEffect(() => {
      document.title = `UV Level Finder`;
  }); 
  const fetchUVIndex = async (latitude, longitude) => {
    const apiKey = 'b70c29c4587b5fbe7c50d0fd77bcd82f'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily,alerts&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data && data.current && data.current.uvi) {
        setUvLevel(data.current.uvi);
      } else {
        setUvLevel('UV Index data not available');
      }
    } catch (error) {
      console.error("Error fetching UV Index:", error);
      setUvLevel('Error fetching UV Index');
    }
  };
  
  const handleSearch = () => {
    const parsedPostcode = parseInt(postcode, 10);
    const location = victoriaLocations.find(loc => loc.Postcodes === parsedPostcode);
    if (location) {
      fetchUVIndex(location.Latitude, location.Longitude);
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
      <Header />
      <div className="center-container">
        <div className="uvlevel-heading">UV Index in your area</div>
        <div className='info'>
          <h1>Please type in your postcode to search the UV Index</h1>
          <input
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSearch}>Search</button>
          <h1>Note: Just enter the postcode only</h1>
          {uvLevel && <div>UV Level: {uvLevel}</div>}
        </div>
      </div>
    </div>
  );
}

export default UVLevels;
