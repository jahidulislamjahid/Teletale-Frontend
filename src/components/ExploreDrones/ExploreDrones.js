import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Footer from "../Footer/Footer";
import Bounce from "react-reveal/Bounce";
import Navbar from "../Navbar/Navbar";
import TourPackCard from "../Tour Package/TourPackCard";

const ExploreDrones = () => {
  const [dronePack, setDronePack] = useState([]);

  useEffect(() => {
    fetch("https://obscure-chamber-14380.herokuapp.com/Devices")
      .then((res) => res.json())
      .then((data) => setDronePack(data));
  }, []);

  return (
    <div className="bg-gray-200">
      <Navbar
        bg="bg-transparent"
        textColor="text-white"
        width="max-w-screen-xl"
      />
      <section className="all-drones-hero-section h-screen">
        <Bounce right>
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-logo font-semibold text-white text-center select-none leading-tight">
              Be The First <br />
              To Use The Latest Iphone.
            </h1>
            <p className="my-2 font-primary text-gray-400 text-center text-sm w-96 select-none">
            Our Pro camera system gets its biggest upgrade ever. With next-level hardware that captures so much more detail. Superintelligent software for new photo and filmmaking techniques. And a mind-blowingly fast chip that makes it all possible. It’ll change the way you shoot.
            </p>
          </div>
        </Bounce>
      </section>
      <section className="max-w-screen-xl mx-auto px-6 relative my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dronePack?.map((item) => {
            return (
              <Fade key={item._id} bottom>
                <TourPackCard {...item} />
              </Fade>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ExploreDrones;
