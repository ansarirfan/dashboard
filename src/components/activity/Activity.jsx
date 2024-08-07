import React from 'react';
import { Bar } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown}  
from '@fortawesome/free-solid-svg-icons';
import './Activity.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
//activity

// Register Chart.js components
  ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
 );


const Activity = () => {
    const data = {
        labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
        datasets: [
          {
            label: 'Activity',
            backgroundColor: '#4CAF50',
            borderColor: '#4CAF50',
            data: [5000, 10000, 7500, 12500, 10000, 15000, 20000, 17500, 15000, 12500, 10000],
          },
        ],
      };

  return (
    <div className="activity">
      <div className="name">
      <div><h3>Activity</h3></div>
      <div><small>Weekly <FontAwesomeIcon icon={faAngleDown}  /></small> </div>
      </div>
      
     <div className="graph">
     <Bar data={data} />
     </div>
            </div>

  );
};

export default Activity;
