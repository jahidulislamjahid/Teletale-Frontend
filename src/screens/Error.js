import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Error = () => {
  return (
    <div>
      <Navbar bg="bg-gray-800" textColor="text-white"></Navbar>
      <img
        src="https://png.pngtree.com/png-vector/20191031/ourlarge/pngtree-socket-404-error-page-for-desktop-and-mobile-png-image_1928856.jpg"
        className="mt-8 w-2/4 mx-auto"
        alt=""
        srcset=""
      />
      <Footer></Footer>
    </div>
  );
};

export default Error;
