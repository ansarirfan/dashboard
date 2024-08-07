//image
import img1 from '../components/Assets/customer-1.png'
import img2 from '../components/Assets/customer-2.png'
import img3 from '../components/Assets/customer-3.png'
import img4 from '../components/Assets/customer-4.png'
import img5 from '../components/Assets/customer-5.png'
import img6 from '../components/Assets/customer-6.png'
import fdb1 from'../components/Assets/img1.png';
import fdb2 from'../components/Assets/img2.png';
import fdb3 from'../components/Assets/img3.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faTruck, faTimesCircle, faDollarSign, faChartLine, faUtensils,  faHamburger, faList, faEnvelope,faBell,faGear,faSearch} 
from '@fortawesome/free-solid-svg-icons';

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
 




// activity
export const data = {
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

//order

 export const orders = [
    {img: img1, customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    {img: img2,  customer: 'Jane Cooper', orderNo: '48965786', amount: '$305.02', status: 'Delivered' },
    {img: img3, customer: 'Guy Hawkins', orderNo: '78989215', amount: '$45.88', status: 'Cancelled' },
    {img: img4, customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending' },
    {img: img5, customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
    {img: img6, customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
  ];

  //feedback

 export const feedbacks = [
    {   img: fdb1,
         name: 'Jenny Wilson', 
      
      comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.' },
    
     { img: fdb2,
        name: 'Dianne Russell',  
        
        comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.' },
    
     { img: fdb3,
        name: 'Devon Lane', 
       
       comment: 'Normally wings are wings, but theirs are lean meaty and tender, and the sauce has the perfect balance of heat and flavor. The service was prompt and courteous.' },
  ];