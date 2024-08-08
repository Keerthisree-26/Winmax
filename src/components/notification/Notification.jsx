import React, { useState } from 'react';
import { Navbar } from '../../Navbar';
import { Sidebar } from '../../Sidebar';
import { BetSlip } from '../../BetSlip';
import './notification.css';
import del from '../../images/deleteIcon.png';

const initialNotifications = [
  { id: 1, message: 'YOUR ACCOUNT HAS LOGGED IN AT', time: '10:00 AM' },
  { id: 2, message: 'YOUR ACCOUNT HAS LOGGED IN AT', time: '11:15 AM' },
  { id: 3, message: 'YOUR ACCOUNT HAS LOGGED IN AT', time: '12:30 PM' },
  { id: 4, message: 'YOUR ACCOUNT HAS LOGGED IN AT', time: '01:45 PM' },
];

export const Notification = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleDelete = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div>
      <Navbar />
      <div className="container notificationBox mt-2">
        <button className='notificationBtn ms-3'>NOTIFICATION</button>
        <div className="innerNotificationBox m-3 p-3 text-center">
          {notifications.length > 0 ? (
            notifications.map(notification => (
              <div key={notification.id} className='loginNotification m-3'>
                <div>LOGIN NOTIFICATION</div>
                {notification.message} {notification.time}
                <img 
                  src={del} 
                  className='deleteIcon' 
                  alt="delete icon" 
                  onClick={() => handleDelete(notification.id)} 
                />
              </div>
            ))
          ) : (
            <div>No notifications</div>
          )}
        </div>
      </div>
      <Sidebar />
      <BetSlip />
    </div>
  );
};
