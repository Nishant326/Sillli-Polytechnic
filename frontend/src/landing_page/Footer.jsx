import React from "react";

function Footer() {
  const linkStyle = {
    color: "gray",
    textDecoration: "none",
    display: "inline-block",
    marginBottom: "6px",
  };

  return (
    <footer style={{ backgroundColor: "rgba(250,250,250,1)", marginTop: "50px" }}>
      <div className="container border-top py-5">
        <div className="row text-center text-md-start">
          {/* College Logo & Info */}
          <div className="col-md-4 mb-4">
            <img
              src="/media/images/collegeLogo.png"
              alt="College Logo"
              style={{ width: "140px" }}
            />
            <p style={{ fontSize: "13px", color: "gray", marginTop: "10px" }}>
             {new Date().getFullYear()} Silli Polytechnic, All Rights Reserved.
            </p>
          </div>

          {/* About the College */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-2">About Our College</h6>
            <p style={{ fontSize: "13px", color: "gray", lineHeight: "1.6" }}>
              Silli Polytechnic offers 3-year Diploma programs in five AICTE-approved
              disciplines: Mechanical Engineering (ME), Civil Engineering (CE),
              Electrical Engineering (EE), Electronics & Communication Engineering (ECE),
              and Computer Science Engineering (CSE).
            </p>
          </div>

          {/* Official Link */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-2">Useful Link</h6>
            <a
              href="https://sillipoly.edu.in/"
              style={linkStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Official College Website
            </a>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div
          className="text-center mt-4"
          style={{ fontSize: "12px", color: "gray" }}
        >
          <p>
            Silli Polytechnic, Ranchi — A leading technical institute dedicated to
            skill development, innovation, and quality education for future engineers.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
