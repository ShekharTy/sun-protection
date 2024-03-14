import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import '../css/dashboard.css';
import dashboardpage from '../data/dashboard.jpg';

function Dashboard() {
    let navigate = useNavigate();

    useEffect(() => {
        document.title = `Home`;
    }); 

    return (
        <div>
            <Header />
            <div className="picture">
                <div className='image'>
                    <img src={dashboardpage} alt='Dashboard' />
                </div>
                <div className='text'>
                    <h1>Sun Protection: Your One-Stop Sun Protection Solution</h1>
                    <h3>Offering real-time UV level updates, sun protection guidance tailored to your location, and tools to manage your family's sunscreen usage effectively.</h3>
                    <button className='uvlevel' onClick={() => navigate('/uvlevel')}>UV Level Finder</button>
                </div>
            </div>
            <div className='website-info'>
                <div className='info-section'>
                    <h1>UV Level Finder</h1>
                    <div className='section-content'>
                        <p>Utilize our UV Level Finder to stay informed about the UV index in your area. Armed with this knowledge, you can choose the best sun protection strategies for any given day, reducing your risk of skin damage.</p>
                        <button className='info-button' onClick={() => navigate('/uvlevel')}>Explore UV Levels</button>
                    </div>
                </div>
                <div className='info-section'>
                    <h1>Sun Protection</h1>
                    <div className='section-content'>
                        <p>Explore comprehensive guides on sun safety. From selecting the right sunscreen to understanding the significance of UPF clothing, our resources are designed to safeguard your skin's health.</p>
                        <button className='info-button' onClick={() => navigate('/sunprotection')}>Learn about Sun Protection</button>
                    </div>
                </div>
                <div className='info-section'>
                    <h1>UV Impacts</h1>
                    <div className='section-content'>
                        <p>Dive into visual data on the impacts of UV exposure, including trends in skin cancer and the effects of heat waves. Our visualizations offer crucial insights for proactive health measures.</p>
                        <button className='info-button' onClick={() => navigate('/uvimpacts')}>View UV Impacts</button>
                    </div>
                </div>
                <div className='info-section'>
                    <h1>Sunscreen Reminder</h1>
                    <div className='section-content'>
                        <p>Never forget sunscreen application again with our personalized reminder service. Tailor reminders to your schedule and sun exposure to enhance your sun protection regimen.</p>
                        <button className='info-button' onClick={() => navigate('/sunscreenreminder')}>Set Reminders</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Dashboard;
