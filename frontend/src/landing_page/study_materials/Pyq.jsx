import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import "./style2.css";

function Pyq() {
  const { branchName, semester } = useParams();
  const [pyqData, setPyqData] = useState([]);

  useEffect(() => {
    // Fetch PYQ data based on branchName and semester
    axios
      .get(`http://localhost:3000/pyq/${branchName}/${semester}`)
      .then((res) => {
        setPyqData(res.data);
      });
  }, [branchName, semester]);
  console.log(pyqData);
  // Mock Data: Replace with API data
  const pyqList = [
    { id: 1, year: "2024", subject: "Data Structures", type: "End Semester" },
    { id: 2, year: "2024", subject: "Java Programming", type: "End Semester" },
    {
      id: 3,
      year: "2023",
      subject: "Operating Systems",
      type: "Supplementary",
    },
    { id: 4, year: "2023", subject: "Data Structures", type: "End Semester" },
    { id: 5, year: "2022", subject: "Mathematics III", type: "End Semester" },
    {
      id: 6,
      year: "2021",
      subject: "Digital Electronics",
      type: "End Semester",
    },
  ];

  return (
    <div className="container mt-5 mb-5">
      {/* Page Header */}
      <div className="d-flex align-items-center mb-4 pb-3 border-bottom">
        <div
          className="bg-danger text-white rounded-circle p-3 me-3 d-flex align-items-center justify-content-center"
          style={{ width: "60px", height: "60px" }}
        >
          <i className="fa-solid fa-clock-rotate-left fs-4"></i>
        </div>
        <div>
          <h2 className="fw-bold mb-0">Previous Questions</h2>
          <p className="text-muted mb-0">
            Showing all papers for{" "}
            <strong>
              {branchName} | Semester {semester}
            </strong>
          </p>
        </div>
      </div>

      {/* PYQ List */}
      <div className="card shadow-sm border-0">
        <div className="list-group list-group-flush">
          {pyqData.map((paper) => (
            <div
              key={paper.id}
              className="list-group-item p-3 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 hover-bg-light"
            >
              {/* Left Side: Icon & Info */}
              <div className="d-flex align-items-center gap-3">
                <div
                  className="bg-danger bg-opacity-10 text-danger rounded p-3 text-center"
                  style={{ width: "60px" }}
                >
                  <h6 className="m-0 fw-bold">{paper.year}</h6>
                </div>

                <div>
                  <h6 className="mb-1 fw-bold text-dark">{paper.subject}</h6>
                  <span className="badge rounded-pill text-bg-secondary fw-normal">
                    {paper.title}
                  </span>
                </div>
              </div>

              {/* Right Side: Download Action */}
              <a
                href={`http://localhost:3000${paper.file_path}`}
                target="_blank"
                className="btn btn-danger btn-sm rounded-pill px-4 d-flex align-items-center gap-2"
              >
                <i className="fa-solid fa-file-arrow-down"></i> Show 
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pyq;
