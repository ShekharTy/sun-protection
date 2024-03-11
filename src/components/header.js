import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/header.css'; 

function Header() {
  let navigate = useNavigate();

  return (
    <div className='header'>
        {/*To navigate back to dashboard when user clicks SunSmart */}
      <h1 onClick={() => navigate('/dashboard')}>SunSmart</h1>
      <h6>BE SMART STAY SAFE</h6>
      {/*Navigate to different pages for each button */}
      <button className='uvlevel' onClick={() => navigate('/uvlevel')}>UV Level Finder</button>
      <button onClick={() => navigate('/sunprotect')}>Sun Protection</button>
      <button onClick={() => navigate('/impact')}>UV Impacts</button>
      <button onClick={() => navigate('/sunscreen-usage')}>Sunscreen Usage</button>
      <button onClick={() => navigate('/use-sunscreen')}>Sunscreen Reminder</button>
      <button onClick={() => navigate('/team-info')}>Team Info</button>
    </div>
  );
}

export default Header;
