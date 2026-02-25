import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Replace with your actual backend URL
  const API_URL = "http://localhost:3000/auth/me"; 
  const LOGOUT_URL = "http://localhost:3000/auth/logout";
  // 1. Fetch User Data
  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(`${API_URL}`, {
        withCredentials: true, // IMPORTANT: Sends the session cookie
      });
      console.log("Profile response:", response);
      if (response.status === 200) {
        setUserDetails(response.data.user);
      }
    } catch (err) {
      console.error("Error fetching profile:", err);
      toast.error("Session expired. Please login again.");
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  // 2. Handle Logout
  const handleLogout = async () => {
    try {
      await axios.post(`${LOGOUT_URL}`, {}, {
        withCredentials: true,
      });
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
      toast.error("Logout failed");
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Loading Profile...</div>;
  }

  if (!userDetails) {
    return <div className="text-center mt-5">No user data found.</div>;
  }

  // Generate initial for avatar
  const defaultLetter = userDetails.name ? userDetails.name.charAt(0).toUpperCase() : "?";

  // Helper to format date (YYYY-MM-DD -> DD Month YYYY)
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card shadow" style={{ width: "100%", maxWidth: "600px", borderRadius: "15px" }}>
        
        {/* Header Section */}
        <div className="card-header bg-primary text-white text-center py-4" style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}>
           <div className="mx-auto mb-3 bg-white text-primary rounded-circle d-flex justify-content-center align-items-center shadow"
             style={{ width: "100px", height: "100px", fontSize: "40px", fontWeight: "bold" }}>
             {defaultLetter}
           </div>
           <h3 className="mb-0">{userDetails.name}</h3>
           <span className="badge bg-light text-primary mt-2">{userDetails.branch} - Sem {userDetails.semester}</span>
        </div>

        {/* Body Section */}
        <div className="card-body p-4">
          <h5 className="text-muted mb-4 border-bottom pb-2">Student Information</h5>

          <div className="row g-3">
            {/* Roll Number */}
            <div className="col-md-6">
              <label className="small text-muted fw-bold">Reg. Number</label>
              <p className="fs-5">{userDetails.reg_no || "N/A"}</p>
            </div>

            {/* Class ID */}
            <div className="col-md-6">
              <label className="small text-muted fw-bold">Class ID</label>
              <p className="fs-5">{userDetails.roll_no || "N/A"}</p>
            </div>

            {/* Email */}
            <div className="col-12">
              <label className="small text-muted fw-bold">Email Address</label>
              <p className="fs-5">{userDetails.email}</p>
            </div>

             {/* DOB */}
             <div className="col-md-6">
              <label className="small text-muted fw-bold">Date of Birth</label>
              <p className="fs-5">{formatDate(userDetails.dob)}</p>
            </div>

             {/* Branch */}
             <div className="col-md-6">
              <label className="small text-muted fw-bold">Branch</label>
              <p className="fs-5">{userDetails.branch}</p>
            </div>
          </div>

          <hr className="my-4" />

          {/* Action Buttons */}
          <div className="d-grid gap-2">
            
            

            {/* Logout Button */}
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout <i className="fa-solid fa-arrow-right-from-bracket ms-2"></i>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;