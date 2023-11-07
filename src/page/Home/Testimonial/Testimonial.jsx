import React from "react";

const Testimonial = () => {
  return (
    <div className="lg:py-16">
      <h2  data-aos="fade-up"
     data-aos-anchor-placement="bottom-center" className="text-4xl font-bold text-center py-8 ">Testimonial</h2>
      <hr className=" border-spacing-2 border-yellow-600 w-1/2 mx-auto" />
      <section className="">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div    data-aos="fade-right" className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold">What Our Customers Say</h2>
              <p className=" ">
                Hear from some of our satisfied customers about their
                experiences at FreshTaste.
              </p>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <div
               data-aos="zoom-in-up"
                    className="p-6 rounded shadow-md bg-[#0000005d] hover:transform hover:scale-105 transition-transform"
                  >
                    <p>
                      "FreshTaste is the place to be! The food is amazing, and
                      the atmosphere is cozy. I keep coming back for more."
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?1"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm  ">Happy Customer</p>
                      </div>
                    </div>
                  </div>
                  <div
                   data-aos="zoom-out-down"
                  className="p-6 rounded shadow-md bg-[#0000005d] hover:transform hover:scale-105 transition-transform">
                    <p>
                      "FreshTaste exceeded my expectations! The dishes are
                      mouthwatering, and the staff is friendly and attentive."
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?2"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full "
                      />
                      <div>
                        <p className="text-lg font-semibold">Alice Johnson</p>
                        <p className="text-sm  ">Satisfied Patron</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div
                  data-aos="zoom-out-down" className="p-6 rounded shadow-md bg-[#0000005d] hover:transform hover:scale-105 transition-transform ">
                    <p>
                      "FreshTaste is an absolute culinary gem, a veritable
                      treasure trove of extraordinary flavors that transport
                      your taste buds to a realm beyond imagination. The
                      enchanting ambiance envelops you in a delightful sensory
                      journey, making every visit an experience to cherish. I
                      wholeheartedly endorse and recommend this culinary haven
                      for all connoisseurs of fine dining."
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?3"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Olivia Smith</p>
                        <p className="text-sm  ">Food Lover</p>
                      </div>
                    </div>
                  </div>
                  <div
                  data-aos="zoom-out-down"
                  className="p-6 rounded shadow-md bg-[#0000005d] hover:transform hover:scale-105 transition-transform ">
                    <p>
                      "FreshTaste is a concealed culinary treasure, a sanctuary
                      for discerning palates where every dish emerges as a
                      gastronomic masterpiece. The service is nothing short of
                      impeccable, adding an extra layer of excellence to your
                      dining experience. Missing out on this epicurean haven
                      would be a regrettable oversight!"
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?4"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Ethan Davis</p>
                        <p className="text-sm  ">Food Critic</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
