import { HiArrowCircleLeft, HiOutlineHome } from "react-icons/hi";
import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <main id="main" className="main">
      <div className="error">
        <h1>Uh oh! We've got a problem</h1>
        <p>{error.message || error.statusText}</p>
        <div className="flex-md">
          <button className="btn btn--dark" onClick={() => navigate(-1)}>
            <HiArrowCircleLeft width={20} />
            <span>Go Back</span>
          </button>
          <Link>
            <HiOutlineHome width={20} />
            <span>Go home</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Error;
