import React from "react";
import { Link } from "react-router-dom";
import NotificationItem from "./NotificationItem";
export const NotificationItems = ({ show_notification }) => {
  return (
    <ul
      className={`dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications ${
        show_notification ? "show" : ""
      }`}
      style={{
        position: "absolute",
        inset: "0px 0px auto auto",
        margin: "0px",
        transform: "translate(-25px, 35px)",
      }}
      data-popper-placement="bottom-end"
    >
      <li className="dropdown-header">
        You have 4 new notifications
        <Link to="#">
          <span className="badge rounded-pill bg-primary p-2 ms-2">
            View all
          </span>
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>

      <NotificationItem
        title={"Lorem Ipsum"}
        message={"Quae dolorem earum veritatis oditseno"}
        time={"30 min. ago"}
        className={"bi bi-exclamation-circle text-warning"}
      />

      <li>
        <hr className="dropdown-divider" />
      </li>

      <NotificationItem
        title={"Atque rerum nesciunt"}
        message={"Quae dolorem earum veritatis oditseno"}
        time={"1 hr. ago"}
        className={"bi bi-x-circle text-danger"}
      />

      <li>
        <hr className="dropdown-divider" />
      </li>

      <NotificationItem
        title={"Sit rerum fuga"}
        message={"Quae dolorem earum veritatis oditseno"}
        time={"12 hrs. ago"}
        className={"bi bi-check-circle text-success"}
      />

      <li>
        <hr className="dropdown-divider" />
      </li>

      <NotificationItem
        title={"Dicta reprehenderit"}
        message={"Quae dolorem earum veritatis oditseno"}
        time={"4 hrs. ago"}
        className={"bi bi-info-circle text-primary"}
      />

      <li>
        <hr className="dropdown-divider" />
      </li>
      <li className="dropdown-footer">
        <Link to="#">Show all notifications</Link>
      </li>
    </ul>
  );
};
