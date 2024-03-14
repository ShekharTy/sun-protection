import React, { useState, useEffect } from 'react';
import Header from './header';
import '../css/sunprotect.css';
import uvRecommendations from '../data/uv_recommend.json';
import sunprotection from '../data/effective sun protection 2.png';


function Sunprotect() {
  const [uvLevel, setUvLevel] = useState('');
  const [displayRecommendation, setDisplayRecommendation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(''); 
  useEffect(() => {
    document.title = `Sun Protection`;
}); 
  const handleEnter = () => {
    const uvLevelInt = parseInt(uvLevel, 10);


    setDisplayRecommendation(null);
    setErrorMessage('');

    if (isNaN(uvLevelInt) || uvLevelInt < 0 || uvLevelInt > 11) {

      setErrorMessage('Please enter a valid UV level (0-11).');
    } else {
      const recommendation = uvRecommendations.find(r => r.uv === uvLevelInt);
      if (recommendation) {
        setDisplayRecommendation(recommendation);
      } else {

        setErrorMessage('No recommendation found for the entered UV level.');
      }
    }
  };

  return (
    <div>
      <Header />
      <div className='content'>
        <div className="something">Sun Protection information for UV Level</div>
        <h1>Please Enter your UV Level</h1>

        {/* UV Level Input and Enter Button */}
        <input
          type="number"
          value={uvLevel}
          onChange={e => setUvLevel(e.target.value)}
          placeholder="Enter your UV level"
        />
        <button className='enter' onClick={handleEnter}>Enter</button>

        {/* Display error message if present */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Display the filtered recommendation in a table */}
        {displayRecommendation && (
          <table className="sunProtectionTable">
            <thead>
              <tr>
                <th>UV Level</th>
                <th>Risk</th>
                <th>Protection</th>
                <th>Sunscreen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{displayRecommendation.uv}</td>
                <td>{displayRecommendation.risk}</td>
                <td>{displayRecommendation.protection}</td>
                <td>{displayRecommendation.sunscreen}</td>
              </tr>
            </tbody>
          </table>
        )}
        <div className="images-container">
          <img src={sunprotection} alt='Sun Protection Information' />
        </div>
      </div>
    </div>
  );
}

export default Sunprotect;
