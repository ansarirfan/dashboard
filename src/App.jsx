
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Card from './components/card/Card';
import Activity from './components/activity/Activity';
import RecentOrders from './components/recentOrder/RecentOrders';
import CustomerFeedback from './components/feedback/CustomerFeedback';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faAngleRight,faBox, faTruck, faTimes, faDollarSign, faBellConcierge , faBurger } 
from '@fortawesome/free-solid-svg-icons';

import './App.css';
import Profit from './components/profit/Profit';

const App = () => {
  
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar /> 
        <div className="dashboard">
        <h3>Dashboard</h3>
          <div className="cards">
            <Card title="Total Orders" value="75"  growth="3%"  icon={faBox}  isNegative={false}/>
            
            <Card title="Total Delivered" value="70" growth="3%" icon={faTruck } isNegative={true} />
            <Card title="Total Cancelled" value="05"  growth="3%" icon={faTimes} isNegative={true} />
            <Card title="Total Revenue" value="$12k"  growth="3%" icon={faDollarSign} isNegative={false}/>
            
            <Profit />
          </div>
          <div className="activity-section">
            <Activity />

             <div className="stats">
             
             
            <div className='statItem'>
              
            <div className='itemList' >
            <div className='iconList'>
            <p><FontAwesomeIcon icon={faBullseye} size='2xl' /></p>
            <h3>Goals</h3>
            </div>
             <span> <FontAwesomeIcon icon={faAngleRight} /></span>
            </div>
              
            <div className='itemList'>
            <div className='iconList'>
            <small><FontAwesomeIcon icon={faBurger} size='2xl'  /></small>
            <h3>Popular Dishes</h3>
            </div>
             <span> <FontAwesomeIcon icon={faAngleRight} /></span>
            </div>
            <div className='itemList'>
            <div className='iconList'>
           <div> <FontAwesomeIcon icon={faBellConcierge} size='2xl'/></div>
            <h3>Menus</h3>
            </div>
             <span> <FontAwesomeIcon icon={faAngleRight} /></span>
            </div>
            </div>
            
          
          
            </div> 
          </div>
          <div className="orders-feedback">
            <RecentOrders />
            <CustomerFeedback />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
