import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [classid, setClassId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          fullName: fullname,
          classId: classid,
          phoneNumber: phoneNumber,
        });
        
      }
      toast.success("User Register successfully",{ position:"top-center"});
      console.log("user registered successful");
      navigate("/login");
    } catch (err) {
      console.log("authentication error :", err);
      toast.error(err.message, {position:"bottom-center"});

    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "450px" }}
      >
        <h3 className="text-center mb-3">Register</h3>

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Class ID (Username)</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Class ID"
              value={classid}
              onChange={(e) => setClassId(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Mobile Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-outline-success w-100">Register</button>

          <p className="text-center mt-3">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
