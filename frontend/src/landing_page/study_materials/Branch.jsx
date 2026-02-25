import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

// Make sure you have the CSS imported
// import "./style2.css";

function NotesSection() {
  const [formData, setFormData] = useState({
    branch: "",
    semester: "",
  });

  // State to toggle between "Form View" and "Resource View"
  const [showResources, setShowResources] = useState(false);
  const [error, setError] = useState("");

  const branches = [
    { code: "CSE", name: "COMPUTER SCIENCE ENGINEERING" },
    { code: "ECE", name: "ELECTRONIC AND COMMUNICATION ENGINEERING" },
    { code: "EEE", name: "ELECTRICAL  ENGINEERING" },
    { code: "ME", name: "MECHANICAL ENGINEERING" },
    { code: "CE", name: "CIVIL ENGINEERING" },
  ];

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // specific validation
    if (!formData.branch || !formData.semester) {
      setError("Please select both Branch and Semester.");
      return;
    }
    // If valid, show the resources
    setShowResources(true);
  };

  const handleReset = () => {
    setShowResources(false);
    setFormData({ branch: "", semester: "" });
  };

  return (
    <div className="container mt-5 mb-5">
      {/* ---------------- SECTION 1: THE SELECTION FORM ---------------- */}
      {!showResources ? (
        <div
          className="card shadow-lg border-0 rounded-4 mx-auto animate-fade-in"
          style={{ maxWidth: "450px" }}
        >
          <div className="card-body p-4">
            <div className="text-center mb-4">
              <span className="bg-light text-primary p-3 rounded-circle d-inline-block mb-3">
                <i className="fa-solid fa-book-open fs-2"></i>
              </span>
              <h2 className="fw-bold text-dark">Study Materials</h2>
              <p className="text-muted small">
                Select your course to access Notes & PYQs
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Branch Selection */}
              <div className="mb-3">
                <label className="form-label fw-semibold text-secondary">
                  Select Branch
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <i className="fa-solid fa-code-branch text-primary"></i>
                  </span>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChanges}
                    className="form-select border-start-0 ps-0 shadow-none"
                  >
                    <option value="">-- Choose Branch --</option>
                    {branches.map((b) => (
                      <option key={b.code} value={b.code}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Semester Selection */}
              <div className="mb-4">
                <label className="form-label fw-semibold text-secondary">
                  Select Semester
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <i className="fa-regular fa-calendar text-primary"></i>
                  </span>
                  <select
                    name="semester"
                    value={formData.semester}
                    onChange={handleChanges}
                    className="form-select border-start-0 ps-0 shadow-none"
                  >
                    <option value="">-- Choose Semester --</option>
                    {[1, 2, 3, 4, 5, 6].map((sem) => (
                      <option key={sem} value={sem}>
                        Semester {sem}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {error && (
                <div className="alert alert-danger py-2 text-center small">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg rounded-pill shadow-sm"
                >
                  Find Resources{" "}
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        /* ---------------- SECTION 2: THE RESOURCE RESULT ---------------- */
        <div className="animate-fade-in">
          <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
            <div>
              <h3 className="fw-bold m-0">
                {formData.branch}{" "}
                <span className="text-muted fw-light">
                  | Semester {formData.semester}
                </span>
              </h3>
              <small className="text-success fw-bold">Resources Found</small>
            </div>
            <button
              onClick={handleReset}
              className="btn btn-outline-secondary btn-sm rounded-pill px-3"
            >
              <i className="fa-solid fa-rotate-left me-1"></i> Change
            </button>
          </div>

          <div className="row g-4">
            {/* CARD 1: NOTES */}
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0 resource-card card-notes">
                <div className="card-body p-4 d-flex align-items-center gap-3">
                  <div
                    className="bg-blue-100 text-primary p-3 rounded-3"
                    style={{ backgroundColor: "#e7f1ff" }}
                  >
                    <i className="fa-solid fa-notebook fs-2"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Lecture Notes</h5>
                    <p className="text-muted small mb-0">
                      Chapter-wise PDF notes for all subjects.
                    </p>
                  </div>
                  <div className="ms-auto">
                    <button className="btn btn-sm btn-primary rounded-circle">
                      <i className="fa-solid fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
                {/* Clicking this would likely go to /notes/CSE/5 */}
                <Link
                  to={`/notes/${formData.branch}/${formData.semester}`}
                  className="stretched-link"
                ></Link>
              </div>
            </div>

            {/* CARD 2: PYQ */}
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0 resource-card card-pyq">
                <div className="card-body p-4 d-flex align-items-center gap-3">
                  <div
                    className="bg-red-100 text-danger p-3 rounded-3"
                    style={{ backgroundColor: "#ffe7e7" }}
                  >
                    <i className="fa-solid fa-clock-rotate-left fs-2"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Previous Year Questions</h5>
                    <p className="text-muted small mb-0">
                      Last 5 years question papers.
                    </p>
                  </div>
                  <div className="ms-auto">
                    <button className="btn btn-sm btn-danger rounded-circle">
                      <i className="fa-solid fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
                {/* Clicking this would likely go to /pyq/CSE/5 */}
                <Link
                  to={`/pyq/${formData.branch}/${formData.semester}`}
                  className="stretched-link"
                ></Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotesSection;
