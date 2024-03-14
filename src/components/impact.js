import React, {useEffect} from 'react';
import Header from './header';
import yearlyTrend from '../data/Skin Cancer Trend yearly.png';
import statewiseTrend from '../data/Skin Cancer Trend statewise.png';
import heatWaveTrend from '../data/Heat wave trend.png';
import heatWaveTrendAus from '../data/Australia_trend.jpeg';
import '../css/impact.css';

function Impact() {
  useEffect(() => {
    document.title = `UV Impacts`;
}); 
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
        <div className='row-2'>
        <div className="plot-heat">
          <h3>Heat Wave Trend in Melbourne (30 days)</h3>
          <img src={heatWaveTrend} alt="Heat Wave Trend" />
        </div>
        <div className="plot-heat">
          <h3>Heat Wave Trend in Australia (30 days)</h3>
          <img src={heatWaveTrendAus} alt="Heat Wave Trend Australia" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Impact;

// import React, { useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import Header from './header';
// import data from '../data/skin_incidence.json'; // Adjust the path as necessary
// import '../css/impact.css';

// function processData(data) {
//   if (!data || !Array.isArray(data)) {
//     return { labels: [], datasets: [] }; // Return an empty data structure if the input data is not as expected
//   }
//   const years = [...new Set(data.map(item => item.Year))].sort();
//   const states = [...new Set(data.map(item => item["State or Territory"]))].filter(state => state !== "Australia");

//   const datasets = states.map(state => {
//     const stateData = data.filter(item => item["State or Territory"] === state);
//     const counts = years.map(year => {
//       const yearData = stateData.find(item => item.Year === year);
//       return yearData ? yearData.Count : 0;
//     });

//     return {
//       label: state,
//       data: counts,
//       backgroundColor: `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.5)`,
//     };
//   });

//   return {
//     labels: years,
//     datasets,
//   };
// }

// function Impact() {
//   const [chartData, setChartData] = useState({});

//   useEffect(() => {
//     const processedData = processData(data);
//     setChartData(processedData);
//   }, []);

//   return (
//     <div>
//       <Header />
//       <div className="container">
//         <h2>Skin Cancer Trends by State</h2>
//         <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Skin Cancer Incidence by State Over the Years' } } }} />
//       </div>
//     </div>
//   );
// }

// export default Impact;

