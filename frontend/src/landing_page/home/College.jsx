import "./style.css";
import { motion, useScroll } from "motion/react";
import { Link } from "react-router-dom";

function College() {
  const { scrollYProgress } = useScroll();

  return (
    <section className="college">
      <div className="container mt-5">
        <h1 className="text-center mt-5 mb-5 syllabus-title">Syllabus</h1>

        <div className="row justify-content-center">
          <motion.div className="col-4 syllabus-card m-4 mb-4">
            <i className="fa-solid fa-computer fs-1 p-3"></i>
            <h4>Computer Science Engineering</h4>
            <Link to={`/syllabus/COMPUTER SCIENCE ENGINEERING`}>
              <button className="apply-btn">Visit Now </button>
            </Link>
          </motion.div>

          <motion.div className="col-4  m-4 syllabus-card mb-4">
            <i class="fa-solid fa-bolt fs-1 p-3"></i>
            <h4>Electrical Engineering</h4>
            <Link to={`/syllabus/ELECTRICAL ENGINEERING`}>
              <button className="apply-btn">Visit Now </button>
            </Link>
          </motion.div>
        </div>

        <div className="row justify-content-center m-4">
          <motion.div className="col-4 syllabus-card m-4 mb-4">
            <i class="fa-solid fa-helmet-safety fs-1 p-3"></i>
            <h4>Civil Engineering</h4>
            <Link to={`/syllabus/CIVIL ENGINEERING`}>
              <button className="apply-btn">Visit Now </button>
            </Link>
          </motion.div>

          <motion.div className="col-4 syllabus-card m-4 mb-4">
            <i className="fa-solid fa-microchip fs-1 p-3"></i>
            <h4>Electronics & Communication Engineering</h4>
            <Link to={`/syllabus/ELECTRONICS AND COMMUNICATION ENGINEERING`}>
              <button className="apply-btn">Visit Now </button>
            </Link>
          </motion.div>

          <motion.div className="col-4 syllabus-card m-4 mb-4">
            <i className="fa-solid fa-cogs fs-1 p-3"></i>
            <h4>Mechanical Engineering</h4>
            <Link to={`/syllabus/MECHANICAL ENGINEERING`}>
              <button className="apply-btn">Visit Now </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default College;
