import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp,faAngleDown} from '@fortawesome/free-solid-svg-icons';
import './Card.css';

const Card = ({ title, value, growth, icon, isNegative }) => {
  return (
    <div className='card'>
      
      <div className="card-icon">{icon && <FontAwesomeIcon icon={icon}  />}</div>
      <div className="card-content">
        <div className="l-card">
        <h3>{title}</h3>
        <p>{value}</p>
        </div>
        <div className="r-card">
          <p className={`icon ${isNegative ? 'negative' : 'positive'}`}><FontAwesomeIcon icon={faAngleDown}  /></p>
          <small className={`growth ${isNegative ? 'negative' : 'positive'}`}>{growth}</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
