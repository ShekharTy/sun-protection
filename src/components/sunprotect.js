import React from 'react';
import Header from './header';
import '../css/sunprotect.css';

function Sunprotect() {
  const sunProtectionData = [
    { uvIndex: '0-2', skinDamage: 'Low', info: 'Wear sunglasses on bright days. SPF30 (or higher) broad-spectrum, water-resistant sunscreen 20 minutes before you go outdoors and re-apply every two hours.' },
    { uvIndex: '3-5', skinDamage: 'Moderate', info: 'Stay in shade near midday when the sun is strongest. SPF30 (or higher) broad-spectrum, water-resistant sunscreen 20 minutes before you go outdoors and re-apply every two hours.' },
    { uvIndex: '6-7', skinDamage: 'High', info: 'Reduce time in the sun between 10 a.m. and 4 p.m. SPF30 (or higher) broad-spectrum, water-resistant sunscreen 20 minutes before you go outdoors and re-apply every two hours.' },
    { uvIndex: '8-10', skinDamage: 'Very High', info: 'Minimize sun exposure between 10 a.m. and 4 p.m. SPF30 (or higher) broad-spectrum, water-resistant sunscreen 20 minutes before you go outdoors and re-apply every two hours.' },
    { uvIndex: '11+', skinDamage: 'Extreme', info: 'Avoid all sun exposure.' },
  ];

  return (
    <div>
      <Header />
      <table className="sunProtectionTable">
        <thead>
          <tr>
            <th>UV Level</th>
            <th>Skin Damage</th>
            <th>Sun Protection Information</th>
          </tr>
        </thead>
        <tbody>
          {sunProtectionData.map((data, index) => (
            <tr key={index}>
              <td>{data.uvIndex}</td>
              <td>{data.skinDamage}</td>
              <td>{data.info}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sunprotect;
