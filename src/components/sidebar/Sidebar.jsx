
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHouse, faChartSimple, faListCheck, faBusinessTime, faBagShopping, faArrowRightFromBracket,faBars

}  
from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };


  return (
    <div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
      <div className="icon">
      <ul>
          <li className={activeIndex === 0 ? 'active' : ''} onClick={() => handleItemClick(0)}>
            <FontAwesomeIcon icon={faHouse} />
          </li>
          <li className={activeIndex === 1 ? 'active' : ''} onClick={() => handleItemClick(1)}>
            <FontAwesomeIcon icon={faChartSimple} />
          </li>
          <li className={activeIndex === 2 ? 'active' : ''} onClick={() => handleItemClick(2)}>
            <FontAwesomeIcon icon={faListCheck} />
          </li>
          <li className={activeIndex === 3 ? 'active' : ''} onClick={() => handleItemClick(3)}>
            <FontAwesomeIcon icon={faBusinessTime} />
          </li>
          <li className={activeIndex === 4 ? 'active' : ''} onClick={() => handleItemClick(4)}>
            <FontAwesomeIcon icon={faBagShopping} />
          </li>
          <li className={activeIndex === 5 ? 'active' : ''} onClick={() => handleItemClick(5)}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
