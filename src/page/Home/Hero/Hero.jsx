import React from "react";

const Hero = () => {
  return (
    <div className="py-8">
      <div className="hero w-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
           data-aos="fade-down-left"
            className="w-full md:w-1/2 rounded-lg shadow-2xl"
            src="https://i.ibb.co/NTcWyS6/161503578-109113161255039-728398424803977015-n.jpg"
            alt="Restaurant Interior"
          />
          <div data-aos="fade-right" className="w-full md:w-1/2 text-center">
            <p className="text-center pt-4 pb-2">ABOUT US</p>
            <hr className="border-spacing-2 border-yellow-600 w-1/2 mx-auto" />

            <h1 className="text-5xl pt-8 font-bold Merienda text-white">
              FreshTaste
            </h1>
            <p className="py-6 Merienda">
              Welcome to FreshTaste, a culinary oasis where the exquisite art of
              taste harmoniously merges with unwavering dedication to
              unparalleled quality. Immerse yourself in a captivating realm of
              delectable flavors meticulously crafted with an abundance of love
              and an unwavering passion for the gastronomic arts.
            </p>
            <button className="btn btn-outline btn-warning">contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
