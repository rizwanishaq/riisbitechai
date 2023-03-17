import { useState } from "react";
import { Link } from "react-router-dom";
import { NotificationItems } from "./NotificationItems";

const Notification = () => {
  const [show_notification, setShow_notification] = useState(false);
  return (
    <li className="nav-item dropdown">
      <Link
        className="nav-link nav-icon"
        to="#"
        data-bs-toggle="dropdown"
        onClick={() => setShow_notification(!show_notification)}
      >
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">4</span>
      </Link>

      <NotificationItems show_notification={show_notification} />
    </li>
  );
};

export default Notification;
