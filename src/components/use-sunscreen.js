import React, { useState, useEffect } from 'react';
import Header from './header';
import '../css/use-sunscreen.css';

function UseSunscreen() {
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [spf, setSpf] = useState('');

    const [targetTime, setTargetTime] = useState(null);

    const [countdownDisplay, setCountdownDisplay] = useState('');

    useEffect(() => {
        document.title = `Sunscreen Reminder`;
        let interval;
        if (targetTime) {
            interval = setInterval(() => {
                const currentTime = new Date();
                const secondsLeft = Math.floor((targetTime - currentTime) / 1000);
                if (secondsLeft <= 0) {
                    clearInterval(interval);
                    setCountdownDisplay('00:00:00');
                    alert('Time to reapply your sunscreen!');
                } else {
                    const hours = Math.floor(secondsLeft / 3600);
                    const minutes = Math.floor((secondsLeft % 3600) / 60);
                    const seconds = secondsLeft % 60;
                    setCountdownDisplay(`${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [targetTime]);

    const handleSetTime = () => {
        const applicationTime = new Date();
        applicationTime.setHours(hour, minute, 0);
        const reapplicationTime = 2 * 60 * 60 * 1000; 
        const nextApplicationTime = new Date(applicationTime.getTime() + reapplicationTime);
        setTargetTime(nextApplicationTime);
    };

    return (
        <div>
            <Header />
            <div className='reminder'>
                <div className='heading'>Sun Screen Reminder</div>
                <div className='sub-heading'>Please set the time when you last applied Sun Screen and select its SPF.</div>
                <div className='time-selectors'>
                    <select value={hour} onChange={(e) => setHour(e.target.value)} className='time-selector'>
                        <option value="" disabled>Hour</option>
                        {[...Array(24).keys()].map(h => (
                            <option key={h} value={h}>{h < 10 ? `0${h}` : h}</option>
                        ))}
                    </select> :
                    <select value={minute} onChange={(e) => setMinute(e.target.value)} className='time-selector'>
                        <option value="" disabled>Minute</option>
                        {[...Array(60).keys()].map(m => (
                            <option key={m} value={m}>{m < 10 ? `0${m}` : m}</option>
                        ))}
                    </select>
                </div>
                <div className='spf-select'>
                    <select value={spf} onChange={(e) => setSpf(e.target.value)} className='spf-selector'>
                        <option value="" disabled>Select SPF</option>
                        <option value="15">SPF 15</option>
                        <option value="30">SPF 30</option>
                        <option value="50">SPF 50+</option>
                    </select>
                </div>
                <button className='set-button' onClick={handleSetTime}>Set Reminder</button>
                {countdownDisplay && <div className='countdown'>Time until reapplication: <br/>{countdownDisplay}</div>}
            </div>
        </div>
    );
}

export default UseSunscreen;
