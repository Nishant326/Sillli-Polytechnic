import "./style.css";

function College() {
  
  return (
    <section className="college">
      <div className="container mt-5">
        <h1 className="text-center mt-5 mb-5 syllabus-title">Syllabus</h1>

        <div className="row justify-content-center">
          <div className="col-4 syllabus-card m-4">
            <i className="fa-solid fa-flask fs-1 p-3"></i>
            <h4>First Year All Branches</h4>
            <button className="apply-btn">Download</button>
          </div>

          <div className="col-4 syllabus-card m-4 mb-4">
            <i className="fa-solid fa-computer fs-1 p-3"></i>
            <h4>Computer Science Engineering</h4>
            <button className="apply-btn">Download</button>
          </div>

          <div className="col-4  m-4 syllabus-card mb-4">
          <i class="fa-solid fa-bolt fs-1 p-3"></i>
            <h4>Electrical Engineering</h4>
            <button className="apply-btn">Download</button>
          </div>
        </div>

        <div className="row justify-content-center m-4">
          <div className="col-4 syllabus-card m-4 mb-4">
            <i class="fa-solid fa-helmet-safety fs-1 p-3"></i>
            <h4>Civil Engineering</h4>
            <button className="apply-btn">Download</button>
          </div>

          <div className="col-4 syllabus-card m-4 mb-4">
            <i className="fa-solid fa-microchip fs-1 p-3"></i>
            <h4>Electronics & Communication Engineering</h4>
            <button className="apply-btn">Download</button>
          </div>

          <div className="col-4 syllabus-card m-4 mb-4">
            <i className="fa-solid fa-cogs fs-1 p-3"></i>
            <h4>Mechanical Engineering</h4>
            <button className="apply-btn">Download</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default College;
