import React from 'react';
import Header from './header'; // Make sure the path is correct
import yearlyTrend from '../data/Skin Cancer Trend yearly.png';
import statewiseTrend from '../data/Skin Cancer Trend statewise.png';
import heatWaveTrend from '../data/Heat wave trend.png';
import '../css/impact.css';

function Impact() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="plot">
            <h3>Skin Cancer Trend Yearly in Australia</h3>
            <img src={yearlyTrend} alt="Skin Cancer Trend Yearly" />
          </div>
          <div className="plot">
            <h3>Skin Cancer Trend Statewise (Australia)</h3>
            <img src={statewiseTrend} alt="Skin Cancer Trend Statewise" />
          </div>
        </div>
        <div className="plot-heat">
          <h3>Heat Wave Trend in Melbourne</h3>
          <img src={heatWaveTrend} alt="Heat Wave Trend" />
        </div>
      </div>
    </div>
  );
}

export default Impact;
