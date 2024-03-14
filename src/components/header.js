import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/header.css'; 

function Header() {
  let navigate = useNavigate();

  return (
    <div className='header'>
        {/*To navigate back to dashboard when user clicks SunSmart */}
      <h1 onClick={() => navigate('/dashboard')}>Sun Protection</h1><br/>
      {/*Navigate to different pages for each button */}
      <div className='uvlevel'>
      <button onClick={() => navigate('/dashboard')}>Home</button>
      <button onClick={() => navigate('/uvlevel')}>UV Level Finder</button>
      <button onClick={() => navigate('/sunprotect')}>Sun Protection</button>
      <button onClick={() => navigate('/impact')}>UV Impacts</button>
      <button onClick={() => navigate('/use-sunscreen')}>Sunscreen Reminder</button>
      </div>
    </div>
  );
}

export default Header;
