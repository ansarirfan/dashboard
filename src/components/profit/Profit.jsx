import React from 'react'
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp} 
from '@fortawesome/free-solid-svg-icons';
import './Profit.css';



const Profit = () => {
    const percentage = 70;
  return (
   
    <div className='newProfit'>
    <div className='setProfit'>
       <div className="leftProfit">
       <div>
         <h4>New Profit</h4>
       
        <span>$6759.25</span>
       </div>
       <div className='increaseValue'>
       <p><FontAwesomeIcon icon={faAngleUp} /></p>
       <span>3%</span>
       </div>
       </div>

       <div className='radialBar'>
       <CircularProgressbar
          className="progress-bar"
          value={percentage}
          styles={buildStyles({
          textSize: '0', // Hide default text
          pathColor: '#4caf50',
     })}
    />
    <div className="progress-text">
        <div>{percentage}%</div>
         <div>Goal Completed</div>
    </div>
    <p>*The values here has been rounded off.</p>
 </div> 
       
       </div>
     </div>
  );
};

export default Profit
