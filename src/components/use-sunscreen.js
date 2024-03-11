import React, { useState } from 'react';
import Header from './header';
import '../css/use-sunscreen.css';

function UseSunscreen() {
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');

    const handleSetTime = () => {
        alert(`Sunscreen was applied at ${hour}:${minute}`);
    };

    return (
        <div>
            <Header />
            <div className='reminder'>
                <div className='heading'>
                    Sun Screen Reminder
                </div>
                <div className='sub-heading'>
                    Please set the time when you first applied the Sun Screen
                </div>
                <div className='time-selectors'>
                    <select value={hour} onChange={(e) => setHour(e.target.value)} className='time-selector'>
                        <option value="" disabled>Hour</option>
                        {[...Array(10).keys()].map(h => (
                            <option key={h + 10} value={h + 10}>{`${h + 10}:00`}</option>
                        ))}
                    </select>
                    <select value={minute} onChange={(e) => setMinute(e.target.value)} className='time-selector'>
                        <option value="" disabled>Minute</option>
                        {[...Array(60).keys()].map(m => (
                            <option key={m} value={m}>{m < 10 ? `0${m}` : m}</option>
                        ))}
                    </select>
                </div>
                <button className='set-button' onClick={handleSetTime}>Set</button>
            </div>
        </div>
    );
}

export default UseSunscreen;
