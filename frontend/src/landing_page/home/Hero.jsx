import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  // Data for the slides
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1920&auto=format&fit=crop",
      title: "Welcome to Silli Polytechnic",
      subtitle: "Explore the Website to gain knowledge and resources.",
    },
    // {
    //   id: 2,
    //   image:"media/image/SILLI_POLYTECHNIC-1.avif",
    //   title: "State-of-the-Art Laboratories",
    //   subtitle: "Experience practical learning with modern equipment.",
    // },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920&auto=format&fit=crop",
      title: "Vibrant Campus Life",
      subtitle: "Join clubs, sports, and cultural events.",
    },
  ];

  return (
    <div className="hero-container">
      <Swiper
        // Install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0} // No gap for hero slider
        slidesPerView={1} // Show 1 full slide
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true} // Infinite loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        style={{ height: "85vh" }} // Adjust height as needed
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="d-flex align-items-center justify-content-center text-center text-white position-relative"
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark Overlay for Text Readability */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // 50% opacity black
                  zIndex: 1,
                }}
              ></div>

              {/* Text Content */}
              <div
                className="container position-relative"
                style={{ zIndex: 2 }}
              >
                <h1
                  className="display-3 fw-bold mb-3"
                  style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}
                >
                  {slide.title}
                </h1>
                <p
                  className="lead fs-3"
                  style={{ textShadow: "1px 1px 5px rgba(0,0,0,0.7)" }}
                >
                  {slide.subtitle}
                </p>
                <button className="btn btn-primary btn-lg mt-4 px-5 rounded-pill">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
