import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import "./style2.css";

function Notes() {
  const { branchName, semester } = useParams();
  const [notesData, setNotesData] = useState([]);
  // Mock Data: Replace this with your actual API data
  const notesList = [
    {
      id: 1,
      subject: "Data Structures",
      unit: "Unit 1",
      title: "Introduction to Arrays",
      author: "Prof. Sharma",
    },
    {
      id: 2,
      subject: "Data Structures",
      unit: "Unit 2",
      title: "Linked Lists Deep Dive",
      author: "Prof. Sharma",
    },
    {
      id: 3,
      subject: "Java Programming",
      unit: "Unit 1",
      title: "OOPs Concepts",
      author: "Prof. Verma",
    },
    {
      id: 4,
      subject: "Operating System",
      unit: "Unit 3",
      title: "Process Scheduling",
      author: "Prof. Singh",
    },
    {
      id: 5,
      subject: "Mathematics III",
      unit: "Unit 5",
      title: "Laplace Transform",
      author: "Prof. Das",
    },
    {
      id: 6,
      subject: "Digital Electronics",
      unit: "Unit 2",
      title: "Logic Gates & Boolean",
      author: "Prof. Rey",
    },
  ];

  useEffect(() => {
    // Fetch notes data based on branchName and semester
    axios
      .get(`http://localhost:3000/notes/${branchName}/${semester}`)
      .then((res) => {
        setNotesData(res.data);
      });
  }, [branchName, semester]);
  console.log(notesData);
  return (
    <div className="container mt-5 mb-5">
      {/* Page Header */}
      <div className="d-flex align-items-center mb-4 pb-3 border-bottom">
        <div
          className="bg-primary text-white rounded-circle p-3 me-3 d-flex align-items-center justify-content-center"
          style={{ width: "60px", height: "60px" }}
        >
          <i className="fa-solid fa-book-open fs-4"></i>
        </div>
        <div>
          <h2 className="fw-bold mb-0">Lecture Notes</h2>
          <p className="text-muted mb-0">
            Showing all notes for{" "}
            <strong>
              {branchName} | Semester {semester}
            </strong>
          </p>
        </div>
      </div>

      {/* Notes Grid */}
      <div className="row g-4">
        {notesData.map((note) => (
          <div className="col-md-6 col-lg-4" key={note.id}>
            <div className="card h-100 shadow-sm border-0 resource-card card-notes">
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between mb-3">
                  <span className="badge bg-blue-100 text-primary border border-primary-subtle">
                    {note.subject}
                  </span>
                  <small className="text-muted fw-semibold">
                    Unit- {note.unit}
                  </small>
                </div>

                <h5 className="card-title fw-bold text-dark mb-2">
                  {note.title}
                </h5>

                {/* <p className="text-muted small mb-4">
                  <i className="fa-regular fa-user me-2"></i> {note.author}
                </p> */}

                <div className="mt-auto">
                  <a
                    href={`http://localhost:3000${note.file_path}`}
                    className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center gap-2"
                                        target="_blank"

                  >
                    <i className="fa-solid fa-download"></i> Show PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
