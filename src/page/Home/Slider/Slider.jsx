import React from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="carousel w-full pt-24 overflow-hidden">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="hero min-h-screen  ">
          <div className="hero-content flex-col lg:flex-row  lg:gap-16 lg:m-20 ">
            <div className=""data-aos="fade-right">
                   <img
              src="https://www.freepnglogos.com/uploads/food-png/food-grass-fed-beef-foodservice-products-grass-run-farms-4.png"
              className="lg:max-w-xl  "
            />
            </div>
       
            <div data-aos="fade-left">
              <h1 className="text-2xl lg:text-5xl font-bold">Escape the ordinary</h1>
              <p className="text-sm w-full py-12">
                Water St. Café offers classic Italian cuisine with influence
                from our beautiful West Coast, an award-winning BC-focused wine
                & beverage list, and nightly live music.
              </p>
              <div className="flex justify-end py-4">
                <button className="btn btn-warning ">
                  Discover our top food
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <div className="hero min-h-screen  text-center ">
          <div className="hero-content flex-col   lg:m-20 lg:gap-16 ">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Serving-Food-PNG-Image-HD.png"
              className="lg:max-w-xl "
            />
            <div>
              <div className="flex justify-center pb-2">
               
                <Link to="/login">
                  
                  <button className="btn btn-warning ">Login for Buy</button>
                </Link>
              </div>

              <h1 className="text-3xl font-bold">
                Seafood & grill on the banks of the Georges River
              </h1>
              <p className="py-12">
                Open for lunch & dinner ,Aquarius Seafood & Grill is also
                available for functions and parties
              </p>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <div className="hero min-h-screen  text-center ">
          <div className="hero-content flex-col   lg:m-20 lg:gap-16">
            <img
              src="https://www.freepnglogos.com/uploads/food-png/food-koconut-grove-24.png"
              className="lg:max-w-xl"
            />
            <div>
              <div className="flex justify-center pb-2">
               
                <Link to='/login'>
                  
                  <button className="btn btn-warning ">Login for Buy</button>
                </Link>
              </div>

              <h1 className="text-3xl font-bold">
              BBQ OCTOPUS
              </h1>
              <p className="py-12">
              A tasting plate with a selection of prawns, pacific oysters, smoked salmon and slipper lobster - served with wasabi lime mayo, soy dipping sauce and lemon
              </p>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
