import React, { useEffect, useState } from "react";
import { Trophy, User, ArrowRight, Award } from "lucide-react";
import axios from "axios";
function MainTopper() {
  const toppers = [
    {
      id: 1,
      name: "Nishant Kumar Rawani",
      branch: "Computer Science",
      semester: "1st Semester",
      percentage: "73.5%",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60", // Placeholder for demo
      rank: 1,
    },
    {
      id: 2,
      name: "Another Student",
      branch: "Civil Engineering",
      semester: "1st Semester",
      percentage: "72.0%",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60",
      rank: 2,
    },
    {
      id: 3,
      name: "Third Student",
      branch: "Mechanical Eng.",
      semester: "1st Semester",
      percentage: "70.0%",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60",
      rank: 3,
    },
    {
      id: 4,
      name: "Fourth Student",
      branch: "Electrical Eng.",
      semester: "1st Semester",
      percentage: "68.5%",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60",
      rank: 4,
    },
  ];

  const [topperData, setTopperData] = useState([]);

  useEffect(() => {
    // Fetch topper data from backend API
    axios
      .get("http://localhost:3000/topper")
      .then((response) => {
        setTopperData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching topper data:", error);
      });
  }, []);
  console.log("Fetched Topper Data:", topperData);

  // Helper function to get badge color based on rank
  const getRankBadge = (rank) => {
    switch (rank) {
      case 1:
        return { color: "bg-warning text-dark", icon: "🥇" }; // Gold
      case 2:
        return { color: "bg-secondary text-white", icon: "🥈" }; // Silver
      case 3:
        return { color: "bg-danger text-white", icon: "🥉" }; // Bronze (using danger for distinct reddish tone)
      default:
        return { color: "bg-primary text-white", icon: `#${rank}` };
    }
  };

  return (
    <div className="bg-light py-5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-primary">
            <Trophy className="me-2 mb-1" size={40} />
            Academic Toppers
          </h2>
          <p className="text-muted fs-5">
            Celebrating the excellence of Silli Polytechnic students
          </p>
          <div
            className="mx-auto bg-primary rounded"
            style={{ width: "80px", height: "4px" }}
          ></div>
        </div>

        {/* Cards Grid */}
        <div className="row g-4">
          {topperData.map((t) => {
            const badge = getRankBadge(t.rankNum);

            return (
              <div key={t.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div
                  className="card h-100 border-0 shadow-lg position-relative overflow-hidden"
                  style={{
                    borderRadius: "15px",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-10px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  {/* Rank Badge */}
                  <div
                    className={`position-absolute top-0 end-0 m-0 px-3 py-2 rounded-bottom-start fw-bold shadow-sm ${badge.color}`}
                    style={{ zIndex: 10, borderBottomLeftRadius: "15px" }}
                  >
                    {badge.icon} Rank {t.rankNum}
                  </div>

                  {/* Image Container */}
                  <div className="position-relative">
                    <img
                      src={`http://localhost:3000${t.file_path}`}
                      className="card-img-top"
                      alt={t.name}
                      style={{
                        height: "220px",
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div
                      className="position-absolute bottom-0 w-100"
                      style={{
                        height: "50px",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                      }}
                    ></div>
                  </div>

                  {/* Card Body */}
                  <div className="card-body text-center p-4">
                    <h5 className="card-title fw-bold text-dark mb-1">
                      {t.name}
                    </h5>
                    <p className="text-muted small mb-3">
                      {t.branch}  -  SEMESTER {t.semester}
                    </p>

                    {/* Percentage Display */}
                    <div className="bg-light rounded-3 p-2 mb-3 border d-flex align-items-center justify-content-center gap-2">
                      <Award className="text-primary" size={20} />
                      <span className="fw-bold text-primary fs-5">
                        {t.percentage}
                      </span>
                    </div>

                    <button className="btn btn-outline-primary w-100 rounded-pill d-flex align-items-center justify-content-center gap-2 group-hover">
                      View Profile <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainTopper;
