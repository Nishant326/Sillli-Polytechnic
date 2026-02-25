import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import '../index.css';

function Navbar() {
  const location = useLocation();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  
  // State for the notification dot
  const [hasNewNotice, setHasNewNotice] = useState(false);

  const BASE_URL = "http://localhost:3000"; // Your backend URL

  // --- LOGIC: Check for New Notices ---
  useEffect(() => {
    const checkNewNotices = async () => {
      try {
        // 1. Fetch only the latest notice (assuming API returns sorted list, or we grab index 0)
        const res = await axios.get(`${BASE_URL}/notice`);
        if (res.data && res.data.length > 0) {
          
          // Get the creation time of the very first (newest) notice
          // Make sure your backend sends the newest notice first!
          const latestNoticeDate = new Date(res.data[0].created_at).getTime();
          
          // 2. Get the time the user last visited the notice page
          const lastViewed = localStorage.getItem("lastViewedNotices");

          // 3. Compare: If no record OR latest notice is newer than last view -> Show Dot
          if (!lastViewed || latestNoticeDate > parseInt(lastViewed)) {
            setHasNewNotice(true);
          } else {
            setHasNewNotice(false);
          }
        }
      } catch (err) {
        console.error("Failed to check notices", err);
      }
    };

    checkNewNotices();
  }, []); // Runs once when Navbar loads

  // --- ACTION: User Clicks "Notice" ---
  const handleNoticeClick = () => {
    // Hide the mobile menu if open
    setIsNavCollapsed(true);
    
    // Remove the red dot
    setHasNewNotice(false);
    
    // Save current time as "Last Viewed"
    // We use Date.now() so next time we compare against this moment
    localStorage.setItem("lastViewedNotices", Date.now().toString());
  };

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const isActive = (path) => location.pathname === path ? "active-link" : "";

  return (
    <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
      <div className="container">
        
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/home">
          <div className="brand-icon">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <span className="fw-bold fs-4 brand-text">Silli Polytechnic</span>
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 p-2">
            
            <li className="nav-item mx-2">
              <Link className={`nav-link custom-link ${isActive('/home')}`} to="/home">
                Home
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className={`nav-link custom-link ${isActive('/about')}`} to="/about">
                About
              </Link>
            </li>

            {/* --- MODIFIED NOTICE LINK --- */}
            <li className="nav-item mx-2">
              <Link 
                className={`nav-link custom-link ${isActive('/notice')}`} 
                to="/notice"
                onClick={handleNoticeClick} // This triggers the "Clear Notification" logic
              >
                Notice 
                {/* CONDITIONAL RENDERING OF RED DOT */}
                {hasNewNotice && (
                  <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                    <span className="visually-hidden">New alerts</span>
                  </span>
                )}
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className={`nav-link custom-link ${isActive('/study_materials')}`} to="/study_materials">
                Study Material
              </Link>
            </li>
             <li className="nav-item mx-2">
              <Link className={`nav-link custom-link ${isActive('/topper')}`} to="/topper">
                Topper
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
             <Link to="/profile" className="btn btn-primary rounded-pill px-4 profile-btn">
               <i className="fa-regular fa-user me-2"></i> Profile
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;