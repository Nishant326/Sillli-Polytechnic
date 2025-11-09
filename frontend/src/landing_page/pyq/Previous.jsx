import React, { useState } from "react";


function Previous() {
  const [branch, setBranch] = useState("");

  const branches = ["CSE", "ECE", "EEE", "ME", "CE", "IT"];
  const myStyle = {
    height: "300px",
    width: "100%"
  }
  return (
    <section className="container mt-5">
      <h2 className="text-center mb-4" style={{ color: "#003366" }}>
        Previous Year Questions
      </h2>

      <div className="d-flex justify-content-center">
        <select
          className="form-select w-50"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        >
          <div className="optionBox">
            <option value="">-- Select Your Branch --</option>
            {branches.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </div>
        </select>
      </div>

      {branch && (
        <div className="text-center mt-4">
          <h5>Showing papers for: {branch}</h5>
          {/* You can fetch or display PDFs here */}
        </div>
      )}
    </section>
  );
}

export default Previous;
