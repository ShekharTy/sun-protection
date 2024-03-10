import React from 'react';
import Header from './header';
import TeamPicture from '../data/team_pic.jpeg';
import '../css/team-info.css';

function Teaminfo () {
    return(
        <div className='team'>
            <Header/>
            <div className='team-info'>
                <h3>Dumb Legends</h3>
                <img src={TeamPicture} alt='Dumb Legends' />
            </div>
            <p>Team Members from left to right :</p>
            <p>Mirudhula Rajadurai (Master of IT),
            Mahatheswaran Sathish Kumar (Master of Data Science),
            Shekhar Tyagi (Master of Data Science),
            Zewen Gu (Master of IT) and 
            Sunmee Lim (Master of AI)</p>
        </div>
    );
}

export default Teaminfo;