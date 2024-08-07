import React from 'react';
import fdb1 from'../Assets/img1.png';
import fdb2 from'../Assets/img2.png';
import fdb3 from'../Assets/img3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } 
from '@fortawesome/free-solid-svg-icons';
import './CustomerFeedback.css';

const CustomerFeedback = () => {
  return (
    <div className="customer-feedback">
      <h3>Customer's Feedback</h3>
      <div className="feedback">
        <strong> <img src={fdb2} alt="" />Jenny Wilson</strong> 
        <p><FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalf} />
        </p>
        <small>The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.</small>
      </div>
      <div className="feedback">
        <strong> <img src={fdb3} alt="" />Dianne Russell</strong>
        <p>  <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
         </p>
        <small>We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.</small>
      </div>
      <div className="feedback">
       <strong> <img src={fdb1} alt="" />Devon Lane</strong>
       <p><FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStarHalf} />
         </p>
        <small>Normally wings are wings, but theirs are lean meaty and tender, and the sauce has the perfect balance of heat and flavor. The service was prompt and courteous.</small>
      </div>
      {/* Add more feedbacks as needed */}
    </div>
  );
};

export default CustomerFeedback;




// import React from 'react'
// import './Feedback.css'
// const Feedbak = () => {
//   return (
//     <div className='feedback'>
//           <h3>Customer's Feedback</h3>
//           {/* Add a list or cards for customer feedback */}
//           {feedbacks.map((feedback, index) => (
//         <div key={index} className="feedback-item">

//           <h4><img src={feedback.img} alt="" /> {feedback.name}</h4>
//           <div className='stars'>
//           <p><FontAwesomeIcon icon={faStar} /></p>
//           <p><FontAwesomeIcon icon={faStar} /></p>
//           <p><FontAwesomeIcon icon={faStar} /></p>
//           <p><FontAwesomeIcon icon={faStar} /></p>
//           <p><FontAwesomeIcon icon={faStar} /></p>
//           </div>
          
//           <p>{feedback.comment}</p>
//         </div>
//       ))}
//         </div>
//   )
// }

// export default Feedbak

