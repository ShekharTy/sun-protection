import React from 'react';
import Header from './header';
import '../css/sunprotect.css';

function Sunprotect() {
  const sunProtectionData = [
    { uvIndex: '0-2', skinDamage: 'Low', info: 'Lightweight, long-sleeved shirts and trousers covering the skin. Pair it with a wide-brimmed hat.' },
    { uvIndex: '3-5', skinDamage: 'Moderate', info: 'Densely woven fabric through which light cannot pass. Wide brimmed hat that covers your ears, face and back of the neck. Also put on some sunglasses.' },
    { uvIndex: '6-7', skinDamage: 'High', info: 'Opt for clothes with a Ultraviolet Protection Factor (UPF) label for maximum protection. Pair them with a broad brimmed hat and UV-blocking sunglasses.' },
    { uvIndex: '8-10', skinDamage: 'Very High', info: 'Minimize sun exposure and opt for clothes with UPF 50+ rating. Broad brimmed hat, UV blocking sunglasses and put on some gloves as well.' },
    { uvIndex: '11+', skinDamage: 'Extreme', info: 'Avoid all sun exposure. ' },
  ];

  return (
    <div>
      <Header />
      <div className='content'>
      <h2>Clothing is the most effective form of sun protection (skincancer.org)</h2>
      <p>All the information below has been fetched from the website skincancer.org</p>
      <p>When it comes to sun protective clothing there is a rating consideration called Ultraviolet Protection Factor (UPF)</p>
      <p>A fabric must have a UPF of 30 to qualify for The Skin Cancer Foundation’s Seal of Recommendation. A UPF of 30 to 49 offers very good protection, while UPF 50+ rates as excellent (skincancer.org).</p>
      </div>
      <table className="sunProtectionTable">
        <thead>
          <tr>
            <th>UV Level</th>
            <th>Skin Damage Risk</th>
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
