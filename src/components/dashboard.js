import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header'
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
                <h1>SunSmart provides a one-stop solution for all your sun protection needs.</h1>
                <h3>The website offers live UV level updates for your location and detailed information about the protection you need according to the UV levels.<br />It also helps keep track of your family's sunscreen usage.</h3>
                <button className='uvlevel' onClick={() => navigate('/uvlevel')}>UV Level Finder</button>
                </div>
            </div>
            <div className='website-info'>
                    <h1>UV Level Finder</h1>
                    <p>This page offers user the ability to check the UV index in their postocde or suburb. Furthermore, it also provides appropriate clothing information according to the user's UV index. Finally, with this information users can make an informed decision about the precautions and preparations they should make to minimise the chance of skin damage from UV rays.</p>
                    <h1>Sun Protection</h1>
                    <h1>UV Impacts</h1>
                    <h1>Sunscreen Usage</h1>
                    <h1>Sunscreen Reminder</h1>
                </div>
        </div>
    );
}

export default Dashboard;
