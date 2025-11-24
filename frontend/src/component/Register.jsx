import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { TypeAnimation } from "react-type-animation";
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
      toast.success("User Register successfully", { position: "top-center" });
      console.log("user registered successful");
      navigate("/login");
    } catch (err) {
      console.log("authentication error :", err);
      toast.error(err.message, { position: "bottom-center" });
    }
  };
  return (
    <>
      <div
        className="login-contain"
        style={{
          textAlign: "center",
          marginTop: "10px",
          color: "#a33a3ac5",
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
          fontStyle: "italic",
        }}
      >
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Welcome To Silli Polytechnic Portal",
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            "You Need To Register for Access",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "1em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div
          className="card shadow p-4"
          style={{ width: "100%", maxWidth: "450px" }}
        >
          <h3 className="text-center mb-3"  style={{ fontFamily: "Poppins, sans-serif",color:"#06367aff" ,fontWeight:"700" }}>
            {" "}
            <img
              src="public/media/images/TILOGO.png"
              alt=""
              style={{ height: "30px", width: "30px" }}
            />
            Register
          </h3>

          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label className="form-label text-muted">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-muted">Class ID (Username)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Class ID"
                value={classid}
                onChange={(e) => setClassId(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-muted">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Mobile Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-muted">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-muted">Password</label>
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
    </>
  );
};

export default Register;
