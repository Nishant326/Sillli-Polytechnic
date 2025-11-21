import React from "react";

function Hero() {
  return (
    <section>
      <div className="container">
        <div className="row p-5">
          <h1 className="text-center fs-3 mt-5 mb-5">
            Welcome to <span className="text-primary">Silli Polytechnic, Silli</span> —
            Empowering Students with Quality Technical Education.
          </h1>
        </div>

        <div
          className="row p-5 mt-5 border-top text-muted"
          style={{ lineHeight: "1.8", fontSize: "1em" }}
        >
          <div className="col-md-6 p-5  col-sm-12 ">
            <p>
              <strong>Silli Polytechnic, Silli</strong> is one of the leading
              diploma engineering institutes in Jharkhand, approved by{" "}
              <strong>AICTE, New Delhi</strong>. The institute is currently
              affiliated to the <strong>Jharkhand University of Technology (JUT)</strong>{" "}
              since 2018. Previously, it was affiliated with the{" "}
              <strong>State Board of Technical Education (SBTE), Jharkhand</strong>.
              <br /> <br />
              The college is also recognized by the{" "}
              <strong>Government of Jharkhand</strong> and is dedicated to
              providing quality technical education to nurture skilled engineers
              for the future.
            </p>
          </div>

          <div className="col-md-6 p-5 col-sm-12">
            <p>
              The institute currently offers <strong>3-year Diploma</strong>{" "}
              courses in <strong>five</strong> AICTE-approved disciplines:
            </p>
            <ul>
              <li>Mechanical Engineering (ME)</li>
              <li>Civil Engineering (CE)</li>
              <li>Electrical Engineering (EE)</li>
              <li>Electronics & Communication Engineering (ECE)</li>
              <li>Computer Science Engineering (CSE)</li>
            </ul>
            <p className="mt-3">
              Silli Polytechnic continues to promote technical excellence,
              innovation, and hands-on learning to help students achieve success
              in their engineering careers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
