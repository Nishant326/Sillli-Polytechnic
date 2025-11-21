import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();   // <-- correct react-router navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      toast.success("User Login Successfully", {
        position: "top-center",
      });

      navigate("/home");   // <-- redirect without page reload

    } catch (err) {
      console.log("Login err:", err.message);
      toast.error(err.message, { position: "bottom-center" });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "420px" }}>
        <h3 className="text-center mb-3">Login</h3>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
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

          <button className="btn btn-outline-primary w-100">Login</button>

          <p className="text-center mt-3">
            Don’t have an account? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
