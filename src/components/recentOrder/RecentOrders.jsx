// import React from 'react';
// import img1 from '../Assets/customer-1.png';
// import img2 from '../Assets/customer-2.png';
// import img3 from '../Assets/customer-3.png';
// import img4 from '../Assets/customer-4.png';
// import img5 from '../Assets/customer-5.png';
// import img6 from '../Assets/customer-6.png';
// import './RecentOrders.css';

// const RecentOrders = (status) => {
//   switch (status) {
//     case 'Delivered':
//       return 'status-delivered';
//     case 'Pending':
//       return 'status-pending';
//     case 'Cancelled':
//       return 'status-cancelled';
//     default:
//       return '';
//   }
// };

//   return (
//     <div className="recent-orders">
//       <h3>Recent Orders</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>Customer</th>
//             <th>Order No.</th>
//             <th>Amount</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td> <img src={img1} alt="" /> Wade Warren</td>
//             <td>15478256</td>
//             <td>$124.00</td>
//             <td className={getStatusClassName('Delivered')}>Delivered</td>
//           </tr>
//           <tr>
//             <td> <img src={img2} alt="" /> Jane Cooper</td>
//             <td>48965786</td>
//             <td>$305.02</td>
//             <td className={getStatusClassName('Delivered')}>Delivered</td>
//           </tr>
//           {/* Add more rows as needed */}
//           <tr>
//           <td> <img src={img3} alt="" /> Guy Hawkins</td>
//             <td>48965786</td>
//             <td>$305.02</td>
//             <td className={getStatusClassName('Cancelled')}>Cancelled</td>
//           </tr>
//           <tr>
//           <td> <img src={img4} alt="" /> Kristin Watson</td>
//             <td>48965786</td>
//             <td>$30.02</td>
//             <td className={getStatusClassName('Delivered')}>Delivered</td>
//           </tr>
//           <tr>
//           <td> <img src={img5} alt="" /> Cody Fisher</td>
//             <td>48965786</td>
//             <td>$30.02</td>
//             <td className={getStatusClassName('Pending')}>Pending</td>
//           </tr>
//           <tr>
//           <td> <img src={img6} alt="" /> Savannah Nguyen</td>
//             <td>48965786</td>
//             <td>$305.02</td>
//             <td> className={getStatusClassName('Delivered')}Delivered</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RecentOrders;

import React from 'react';
 import img1 from '../Assets/customer-1.png';
 import img2 from '../Assets/customer-2.png';
 import img3 from '../Assets/customer-3.png';
 import img4 from '../Assets/customer-4.png';
 import img5 from '../Assets/customer-5.png';
 import img6 from '../Assets/customer-6.png';
import './RecentOrders.css'; // Make sure to import the CSS file

const getStatusClassName = (status) => {
  switch (status) {
    case 'Delivered':
      return 'status-delivered';
    case 'Pending':
      return 'status-pending';
    case 'Cancelled':
      return 'status-cancelled';
    default:
      return '';
  }
};

const RecentOrders = () => {
  return (
    <div className="recent-orders">
      <h3>Recent Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src={img1} alt="" /> Wade Warren</td>
            <td>15478256</td>
            <td>$124.00</td>
            <td className={getStatusClassName('Delivered')}>Delivered</td>
          </tr>
          <tr>
            <td><img src={img2} alt="" /> Jane Cooper</td>
            <td>48965786</td>
            <td>$305.02</td>
            <td className={getStatusClassName('Delivered')}>Delivered</td>
          </tr>
          <tr>
            <td><img src={img3} alt="" /> Guy Hawkins</td>
            <td>48965786</td>
            <td>$305.02</td>
            <td className={getStatusClassName('Cancelled')}>Cancelled</td>
          </tr>
          <tr>
            <td><img src={img4} alt="" /> Kristin Watson</td>
            <td>48965786</td>
            <td>$30.02</td>
            <td className={getStatusClassName('Delivered')}>Delivered</td>
          </tr>
          <tr>
            <td><img src={img5} alt="" /> Cody Fisher</td>
            <td>48965786</td>
            <td>$30.02</td>
            <td className={getStatusClassName('Pending')}>Pending</td>
          </tr>
          <tr>
            <td><img src={img6} alt="" /> Savannah Nguyen</td>
            <td>48965786</td>
            <td>$305.02</td>
            <td className={getStatusClassName('Delivered')}>Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
