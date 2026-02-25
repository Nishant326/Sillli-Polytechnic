import "./style2.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Hero() {
  const [noticeData, setNoticeData] = useState([]);

  // Define your backend URL here to easily attach to PDF paths
  const BASE_URL = "http://localhost:3000";

  useEffect(() => {
    axios
      .get(`${BASE_URL}/notice`)
      .then((res) => {
        setNoticeData(res.data);
        console.log("Fetched Data:", res.data);
      })
      .catch((err) => console.error("Error fetching notices:", err));
  }, []);

  // --- HELPER FUNCTION 1: Make Sense of Categories ---
  // This looks at the Title and decides what Category badge to show
  const deriveCategory = (title) => {
    if (!title) return "General";
    const t = title.toLowerCase();

    if (t.includes("exam") || t.includes("schedule") || t.includes("routine"))
      return "Examination";
    if (
      t.includes("holiday") ||
      t.includes("closed") ||
      t.includes("vacation") ||
      t.includes("jayanti") ||
      t.includes("puja")
    )
      return "Holiday";
    if (t.includes("result") || t.includes("marks")) return "Results";
    if (
      t.includes("scholarship") ||
      t.includes("form") ||
      t.includes("admission")
    )
      return "Administration";

    return "General Notice"; // Default if no keywords match
  };

  // --- HELPER FUNCTION 2: Format Date ---
  // Converts "2026-01-06T12:28:01.000Z" to "06 Jan 2026"
  const formatDate = (isoString) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section className="college notice-section">
      <div className="container mt-5">
        <h1 className="text-center mt-5 mb-5 syllabus-title">
          <span className="border-bottom border-primary pb-2">
            Latest Notices
          </span>
        </h1>

        <div className="row justify-content-center">
          {/* MAPPING OVER REAL BACKEND DATA NOW */}
          {noticeData.length > 0 ? (
            noticeData.map((notice) => {
              // Calculate category once per item
              const category = deriveCategory(notice.title);
              // Construct full PDF link
              const pdfLink = `${BASE_URL}${notice.pdf_path}`;

              return (
                <div className="col-lg-4 col-md-6 col-12 mb-4" key={notice.id}>
                  <div className="card notice-card h-100 shadow-sm border-0">
                    <div className="card-body d-flex flex-column">
                      {/* Icon and Category Badge */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="icon-box">
                          {/* We can even change icons based on category if you want, currently keeping Bell */}
                          <i className="fa-solid fa-bell fs-4 text-white"></i>
                        </div>
                        <span className="badge bg-light text-primary border border-primary">
                          {category}
                        </span>
                      </div>

                      {/* Title and Date */}
                      <h5 className="card-title fw-bold text-dark">
                        {notice.title}
                      </h5>

                      <p className="text-muted small mb-4">
                        <i className="fa-regular fa-calendar me-2"></i>
                        {formatDate(notice.created_at)}
                      </p>

                      {/* Optional: Show description if you want, otherwise keep it hidden to save space */}
                      {/* <p className="text-secondary small mb-3">{notice.description}</p> */}

                      {/* Buttons Section */}
                      <div className="mt-auto d-flex gap-2">
                        {/* View Button */}
                        <a
                          href={pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary w-50 d-flex align-items-center justify-content-center gap-2"
                        >
                          <i className="fa-solid fa-eye"></i> View
                        </a>

                        {/* Download Button */}
                        <a
                          href={pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          className="btn btn-primary w-50 d-flex align-items-center justify-content-center gap-2"
                        >
                          <i className="fa-solid fa-download"></i> Save
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center text-muted">No notices found.</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
