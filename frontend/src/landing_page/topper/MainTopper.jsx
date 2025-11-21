// ...existing code...
function MainTopper() {
  const toppers = [
    {
      id: 1,
      name: "Nishant Kumar Rawani",
      title: "Topper of First semester 2025",
      percentage: "73.5%",
      img: "/media/images/myImage.jpg",
      rank: "1st"
    },
    {
      id: 2,
      name: "Another Student",
      title: "Topper of First semester 2025",
      percentage: "72.0%",
      img: "/media/images/myImage.jpg",
      rank: "2nd"
    }
  ];

  return (
    <>
      <div className="container">
        <h1 className="text-center fs-2 m-5 syllabus-title">Topper Of Silli Polytechnic</h1>

        <div className="container">
          <div className="row g-4">
            {toppers.map((t) => (
              <div key={t.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
                <div className="card h-100 w-100 position-relative">
                  <span className="position-absolute top-0 start-0 m-2 badge rounded-pill bg-danger">
                    {t.rank}
                    <span className="visually-hidden"> rank</span>
                  </span>

                  <img
                    src={t.img}
                    className="card-img-top"
                    alt={`${t.name} photo`}
                    style={{ height: "14rem", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{t.name}</h5>
                    <p className="card-text mb-3">
                      {t.title} — Percentage: {t.percentage}
                    </p>
                    <div className="mt-auto">
                      <a href="#" className="btn btn-primary w-100">
                        View profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


export default MainTopper;
