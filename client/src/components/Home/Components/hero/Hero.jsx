import React from "react";
import { heroBg , instructor , arrow } from "../../../../Utils/Utils";
const Hero = () => {
  return (
    <div className="w-full h-[90vh] bg-[#edeaf5] relative">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div>
          <p className="font-light text-[#704FE6]">
            Welcome Schoolify online courses
          </p>
          <h1 className="font-black text-5xl text-[#17254E] my-2" >
            Achieving Your Dreams <br />
            Through Education
          </h1>
          <p className="font-light my-2" >We are experienced in educationl platform and skilled strategies <br />
          for the success of our online learning.</p>
        <button className="bg-[#17254E] rounded-full text-white py-3 px-5 my-2" >Find courses</button>
        </div>
        <div className="h-[90vh] w-[45%] relative">
          <img className="h-full w-full object-cover" src={heroBg} alt="" />
          <img className="absolute bottom-14 h-40 left-[-6rem]" src={instructor} alt="" />
        </div>
      </div>
      <img className="absolute bottom-28  left-[24%]" src={arrow} alt="" />
    </div>
  );
};

export default Hero;
