import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faEnvelope,faBell,faBars, faGear }  
from '@fortawesome/free-solid-svg-icons';
import product from '../Assets/profile.png'
import './Header.css';

const Header = () => {
  return (
    <div className="header">
       <div className="logo"><FontAwesomeIcon icon={faBars}  /></div>
      <div className="search">
      <input type="text" placeholder="Search" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <div className="user-info">
        <span className="icon"><FontAwesomeIcon icon={faGear} /></span>
        
        <span className="icon"><FontAwesomeIcon icon={faEnvelope}  /></span>
        <span className="icon"><FontAwesomeIcon icon={faBell}  className="bell-icon"  /></span>
        <span className="dot"></span>
        <span className="icon"> <img src={product} alt="" /></span>
      </div>
    </div>
  );
};

export default Header;
