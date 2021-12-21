import React from "react";
import Fade from "react-reveal/Fade";

const About = () => {
  const service = [
    {
      id: 1,
      text: "Two Years Extended Warrenty",
      image: "../../../assets/smartph.png",
    },
    {
      id: 2,
      text: "World Wide Free Shipping",
      image: "../../../assets/travel.png",
    },
    {
      id: 3,
      text: "Guaranteed Authentic Product",
      image: "../../../assets/sleep.png",
    },
  ];
  return (
    <section className="max-w-screen-xl mx-auto px-6">
      {/* heading  */}
      <Fade left>
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-logo text-gray-800 text-3xl font-semibold">
            About Teletale
          </h1>
          <div className="h-1 w-28 bg-gray-400 rounded-full"></div>
        </div>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-8">
        {/* left side image  */}
        <Fade left>
          <div className="flex justify-center lg:justify-start">
            <img src="../../../assets/about.png" alt="about" />
          </div>
        </Fade>
        {/* right side description  */}
        <Fade right>
          <div className="flex flex-col items-center lg:items-start space-y-3">
            {/* description  */}
            <p className="text-gray-500 text-sm font-primary">
              For More Than A Decade We Are Providing Exeptional Support Through Our Organization. To This Period Of Time We Are The Apple Official Partners With Zero Record Of Failure. We Provide WorldWide Free Shipping Within 26 to 45 Day period. And Express Next Day Doorstep Delivery Beeing The Lowest Cost In The Industry. We Provide Two Years Extended Warrenty Troughout The World. And All Our Products Are One Hundred Percent authentic. Also You Can Customise Your Favorite Phone By Us, Whatever Material It Is, Gold,Diamond,Shaphire Or Even Titanium.
            </p>

            {/* heading  */}
            <h1 className="mt-4 font-primary text-gray-800 text-xl font-semibold">
              Why Choose Us
            </h1>

            {/* services  */}
            <div className="flex flex-col space-y-5 my-4">
              {service.map((item) => (
                <div className="flex items-center space-x-3" key={item.id}>
                  <img className="w-12" src={item.image} alt={item.text} />
                  <span className="w-36 text-gray-500 text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
