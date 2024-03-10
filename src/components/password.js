import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/password.css';

function PasswordPage() {
  let navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Initiating the correct password value
  const correctPassword = "teamTP06";

  // To assign the input value to check
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  // To check if entered password is correct
  const handleUnlockClick = () => {
    if (password === correctPassword) {
      navigate('/dashboard'); 
    } else {
      setError('Incorrect Password'); 
      setPassword(''); 
    }
  };

  return (
    <div>
      <h2>Input the password to gain access</h2>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <button onClick={handleUnlockClick}>Unlock</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default PasswordPage;
