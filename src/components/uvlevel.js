import React, { useState, useEffect } from 'react';
import Header from './header';
import victoriaLocations from '../data/victoria_location.json';
import '../css/uvlevel.css';

function UVLevels() {
  const [postcode, setPostcode] = useState('');
  const [uvLevel, setUvLevel] = useState('');
  const [clothingRecommendation, setClothingRecommendation] = useState('');

  useEffect(() => {
      document.title = `UV Level Finder`;
  }); 

  const generateUVIndexAndRecommendations = () => {

    const randomUVIndex = (Math.random() * (5 - 4) + 4).toFixed(1); 
    setUvLevel(randomUVIndex);

    const uvIndexNumber = parseFloat(randomUVIndex);

    if (uvIndexNumber <= 5) {
        setClothingRecommendation('Wear sunglasses and apply SPF 30+ sunscreen every 2 hours. Try to avoid long exposure to the sun.');
    } else {
        setClothingRecommendation('Wear a hat, sunglasses, long sleeves, and apply SPF 50+ sunscreen every 2 hours. Try to avoid long exposure to the sun');
    }
};


  const handleSearch = () => {
    const parsedPostcode = parseInt(postcode, 10);
    const location = victoriaLocations.find(loc => loc.Postcodes === parsedPostcode);
    if (location) {
      generateUVIndexAndRecommendations();
    } else {
      setUvLevel('Postcode not found');
      setClothingRecommendation('');
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
          {uvLevel && <div><h2>UV Level: {uvLevel}</h2></div>}
          {clothingRecommendation && <div><h1>Protection Recommendation</h1><h3>{clothingRecommendation}</h3></div>}
        </div>
      </div>
    </div>
  );
}

export default UVLevels;
