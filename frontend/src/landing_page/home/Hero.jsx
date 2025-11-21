
function Hero() {
  return (
    <section className="hero mb-5">
      <div className="container my-5 mb-5">
        <div className="row align-items-center">
          
          {/* Left side — image */}
          <div className="col-md-4">
            <div className="image-wrapper">
              <img src="media/images/logo.png" alt="student information" />
            </div>
          </div>


          {/* Right side — text */}
          <div className="col-md-8 mt-4 mt-md-0">
            <p className="hero-text">
              Welcome to <strong>Silli Polytechnic Silli</strong> Portal — your all-in-one hub
              for college updates! Get instant access to important notices, exam
              results, and previous year question papers (PYQs). Stay informed,
              stay ahead, and make your college life easier with everything in
              one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
