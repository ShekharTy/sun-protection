import React, { useEffect, useState } from 'react';
import Header from './header';
import yearlyTrend from '../data/Skin Cancer Trend yearly.png';
import heatWaveTrendAus from '../data/Australia_trend.jpeg';
import '../css/impact.css';

function Impact() {
  const [selectedVisualization, setSelectedVisualization] = useState('');

  useEffect(() => {
    document.title = `UV Impacts`;
  });

  const renderVisualization = () => {
    switch (selectedVisualization) {
      case 'yearlyTrend':
        return (
          <div className="visualization-content">
            <img src={yearlyTrend} alt="Skin Cancer Trend Yearly" />
            <div className="visualization-info">
              <h4>Skin Cancer Trend Yearly in Australia</h4>
              <p>Details about the Skin Cancer Trend Yearly in Australia, showing the increase or decrease over the years. If people would have used appropriate sun protection then the number of skin cancer cases would reduce by 45-50%.</p>
            </div>
          </div>
        );
      case 'heatWaveTrendAus':
        return (
          <div className="visualization-content">
            <img src={heatWaveTrendAus} alt="Heat Wave Trend Australia" />
            <div className="visualization-info">
              <h4>Heat Wave Trend in Australia (30 days)</h4>
              <p>Analysis of the heat wave trends in Australia over the last 30 days, indicating the intensity and frequency of heat waves.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="intro">
          <h2>UV Impacts Visualization</h2>
          <p>Understanding the trends in skin cancer and heat waves is crucial for raising awareness and promoting preventive measures. Visualizations help in simplifying complex data, making it accessible and understandable for everyone. Here, you can explore the yearly trends in skin cancer cases in Australia, as well as the recent trends in heat waves. Such insights are invaluable in understanding the impact of UV exposure and the importance of sun protection.</p>
          <p>Please select a visualization from the dropdown menu below to get started.</p>
        </div>
        <div className="selection">
          <select
            value={selectedVisualization}
            onChange={(e) => setSelectedVisualization(e.target.value)}
          >
            <option value="">Select a Visualization</option>
            <option value="yearlyTrend">Skin Cancer Trend Yearly in Australia</option>
            <option value="heatWaveTrendAus">Heat Wave Trend in Australia (30 days)</option>
          </select>
        </div>
        <div className="visualization">
          {renderVisualization()}
        </div>
      </div>
    </div>
  );
}

export default Impact;
