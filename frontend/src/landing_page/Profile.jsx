import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [userDetails, setUserDetails] = useState({});

  const fetchUserDetails = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log("User Details:", docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };

  const navigate = useNavigate();

  const handleLogout = async () => {
    try{
      await auth.signOut()
      navigate("/login");
    }catch(err){
      console.log("Logout error:",err.message);
    }
  }

  useEffect(() => {
    fetchUserDetails();
  }, []);

  // Temporary example data (replace with real user data)
  const name = userDetails.fullName;
  const roll = userDetails.classId;
  const email = userDetails.email;
  const batch = "2023–26";

  const defaultLetter = name ? name.charAt(0).toUpperCase() : "?";

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container my-4 d-flex justify-content-center">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "550px" }}
      >
        <h3 className="text-center mb-4 fs-4">My Profile</h3>

        {/* Profile Image / Initial */}
        <div className="text-center mb-4">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Profile"
              className="rounded-circle"
              width="130"
              height="130"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div
              className="rounded-circle text-center d-flex justify-content-center align-items-center bg-primary text-white"
              style={{
                width: "130px",
                height: "130px",
                fontSize: "50px",
                fontWeight: "bold",
              }}
            >
              {defaultLetter}
            </div>
          )}
        </div>

        {/* Info Fields */}
        <div className="mb-3">
          <p className="fs-5">
            Name: <span>{name}</span>{" "}
          </p>
        </div>

        <div className="mb-3">
          <p className="fs-5">
            Roll Number: <span>{roll}</span>
          </p>
        </div>

        <div className="mb-3">
          <p className="fs-5">
            Email ID: <span>{email}</span>
          </p>
        </div>

        <div className="mb-3">
          <p className="fs-5">
            Batch: <span>{batch}</span>
          </p>
        </div>
        <div className="mb-3">
          <button type="button" className="btn btn-outline-danger" onClick={handleLogout}>
            Logout <span><i className="fa-solid fa-arrow-right-from-bracket" style={{fontSize: "14px"}}></i></span> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
