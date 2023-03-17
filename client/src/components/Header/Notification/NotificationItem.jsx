import React from "react";

const NotificationItem = ({ title, message, time, className }) => {
  return (
    <li className="notification-item">
      <i className={className}></i>
      <div>
        <h4>{title}</h4>
        <p>{message}</p>
        <p>{time}</p>
      </div>
    </li>
  );
};

export default NotificationItem;
