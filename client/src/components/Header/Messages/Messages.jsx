import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Message from "./Message";

const Messages = () => {
  const [show_messages, setShow_Messages] = useState(false);
  return (
    <li className="nav-item dropdown">
      <Link
        className="nav-link nav-icon"
        to="#"
        data-bs-toggle="dropdown"
        onClick={() => setShow_Messages(!show_messages)}
      >
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number">3</span>
      </Link>

      <ul
        className={`dropdown-menu dropdown-menu-end dropdown-menu-arrow messages ${
          show_messages ? "show" : ""
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
          You have 3 new messages
          <Link to="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <Message
          title={"Maria Hudson"}
          message={
            "Velit asperiores et ducimus soluta repudiandae labore officiaest ut..."
          }
          time={"4 hrs. ago"}
          image={"assets/img/messages-1.jpg"}
        />

        <li>
          <hr className="dropdown-divider" />
        </li>

        <Message
          title={"Anna Nelson"}
          message={
            "Velit asperiores et ducimus soluta repudiandae labore officiaest ut..."
          }
          time={"6 hrs. ago"}
          image={"assets/img/messages-2.jpg"}
        />

        <li>
          <hr className="dropdown-divider" />
        </li>

        <Message
          title={"David Muldon"}
          message={
            "Velit asperiores et ducimus soluta repudiandae labore officiaest ut..."
          }
          time={"8 hrs. ago"}
          image={"assets/img/messages-3.jpg"}
        />

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="dropdown-footer">
          <Link to="#">Show all messages</Link>
        </li>
      </ul>
    </li>
  );
};

export default Messages;
