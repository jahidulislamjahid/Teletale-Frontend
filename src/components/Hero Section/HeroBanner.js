import React from "react";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="hero-section">
      <Bounce left>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-logo font-semibold text-white text-center select-none leading-tight">
            the best Phone <br />
             for pros
          </h1>
          <p className="my-2 font-primary text-gray-400 text-center text-sm w-96 select-none">
          A dramatically more powerful camera system. A display so responsive, every interaction feels new again. The world’s fastest smartphone chip. Exceptional durability. And a huge leap in battery life.
          </p>
          <Link to="/explore">
            <button className="btn-primary-2 w-36 mt-5">Explore More</button>
          </Link>
        </div>
      </Bounce>
    </section>
  );
};

export default HeroBanner;
