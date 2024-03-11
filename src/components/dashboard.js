import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header'
import '../css/dashboard.css';
import dashboardpage from '../data/dashboard.jpg';

function Dashboard() {
    let navigate = useNavigate();
    return (
        <div>
            <Header />
            <div className="picture">
                <img src={dashboardpage} alt='Dashboard' />
                <h1>SunSmart provides a one-stop solution for all your sun protection needs.</h1>
                <h3>The website offers live UV level updates for your location and detailed information about the protection you need according to the UV levels.<br />It also helps keep track of your family's sunscreen usage.</h3>
                <button className='uvlevel' onClick={() => navigate('/uvlevel')}>UV Level Finder</button>
            </div>
        </div>
    );
}

export default Dashboard;
