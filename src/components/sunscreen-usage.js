import React from 'react';
import Header from './header';
import '../css/sunscreen-usage.css'; 

function Usage() {

    const sunscreenInfo = [
        { uvLevel: 'Low (0-2)', recommendation: 'Sunscreen may not be necessary unless you plan to be outdoors for extended periods.' },
        { uvLevel: 'Moderate (3-5)', recommendation: 'Apply SPF 30+ sunscreen every 2 hours, especially if you are outdoors.' },
        { uvLevel: 'High (6-7)', recommendation: 'Apply SPF 30+ sunscreen every 2 hours, wear protective clothing, and seek shade.' },
        { uvLevel: 'Very High (8-10)', recommendation: 'Apply SPF 50 sunscreen every 2 hours, wear protective clothing, and avoid outdoor activities during peak hours.' },
        { uvLevel: 'Extreme (11+)', recommendation: 'Apply SPF 50+ sunscreen every 2 hours, wear UV-blocking clothing, and avoid being outdoors.' },
    ];

    return (
        <div>
            <Header />
            <div className="sunscreen-table">
                <h2>Sunscreen Usage Recommendations</h2>
                <table>
                    <thead>
                        <tr>
                            <th>UV Level</th>
                            <th>Recommendation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sunscreenInfo.map((info, index) => (
                            <tr key={index}>
                                <td>{info.uvLevel}</td>
                                <td>{info.recommendation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Usage;
