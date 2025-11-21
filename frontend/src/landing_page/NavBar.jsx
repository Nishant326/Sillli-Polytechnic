import React from "react";
import { Link } from "react-router-dom";
import '../index.css'
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "white !important" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/home">
         <h4 className="fs-3 mainIcon">Silli Polytechnic</h4>
        </Link>
       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item nav-element">
              <Link className="nav-link active" aria-current="page" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item nav-element">
              <Link className="nav-link  active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item nav-element">
              <Link className ="nav-link  active" to="/notice">
                Notice
              </Link>
            </li>
            {/* <li className="nav-item nav-element">
              <Link className="nav-link  active" to="/pyq">
                PYQ
              </Link>
            </li> */}
            <li className="nav-item nav-element">
              <Link className="nav-link  active" to="/result">
                Result
              </Link>
            </li>
            <li className="nav-item nav-element">
              <Link className ="nav-link  active" to="/topper">
                Topper
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search"></form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
