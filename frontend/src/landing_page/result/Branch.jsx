// import "../home/style.css";
import React, { useState } from "react";

function Branch() {
  const [formData, setFormData] = useState({
    Branch: "",
    Year: "",
    Semester: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
  <div className="card shadow-lg border-0 rounded-4 mx-auto mt-5" style={{ maxWidth: "400px" }}>
    <div className="card-body p-4">
      <h2 className="text-center mb-4 fw-semibold">Check Your Result</h2>

      <form onSubmit={handleSubmit}>
        {/* Year */}
        <div className="mb-3" >
          <label className="form-label fw-medium">Select Year</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChanges}
            className="form-select2 p-2 m-2"
            required
          >
            <option value="">-- Choose Year --</option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
          </select>
        </div>

        {/* Branch */}
        <div className="mb-3">
          <label className="form-label fw-medium">Select Branch</label>
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChanges}
            className="form-select2 p-2 m-2"
            required
          >
            <option value="">-- Choose Branch --</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="ME">Mechanical</option>
            <option value="CE">Civil</option>
          </select>
        </div>

        {/* Semester */}
        <div className="mb-4">
          <label className="form-label fw-medium">Select Semester</label>
          <select
            name="semester"
            value={formData.semester}
            onChange={handleChanges}
            className="form-select2 p-2 m-2"
            required
          >
            <option value="">-- Choose Semester --</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
            <option value="5">Semester 5</option>
            <option value="6">Semester 6</option>
          </select>
        </div>

        {/* Button */}
        <div className="d-grid">
          <button type="button" className="btn btn-primary btn-lg">
            View Result
          </button>
        </div>
      </form>
    </div>
  </div>
</>

  );
}

export default Branch;
