import React from "react";
import { Link } from "react-router-dom";
const Message = ({ title, message, time, image }) => {
  return (
    <li className="message-item">
      <Link to="#">
        <img src={image} alt="" className="rounded-circle" />
        <div>
          <h4>{title}</h4>
          <p>{message}</p>
          <p>{time}</p>
        </div>
      </Link>
    </li>
  );
};

export default Message;
