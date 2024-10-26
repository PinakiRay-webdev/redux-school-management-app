import React from "react";
import bg from "./Assets/bg.svg";
import { myBenefits } from "./utils";
const Benefits = () => {
  return (
    <div className="w-full h-full py-12">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-28">
        <div>
            {/* heading  */}
          <p className="text-[#704FE6] bg-[#E9E2FF] px-3 py-1 font-light w-fit text-xs">
            Why choose us
          </p>
          {/* heading  */}
          <h1 className="text-4xl font-bold text-[#0E2A46] mt-5 capitalize">
            Creating a community of <br /> Life long learners.
          </h1>
          {/* description  */}
          <p className="mt-5" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris..
          </p>

            {/* reasons to choose  */}
          <div className="grid grid-cols-2 gap-5 mt-5" >
            {myBenefits?.map((Element , id) => (
                <div className="bg-[#E9E2FF] py-6 px-6 rounded-md" key={id} >
                    <h1 className="font-semibold mb-3" >{Element.title}</h1>
                    <p className="font-light" >{Element.bio}</p>
                </div>
            ))}
          </div>
        </div>
        <img className="w-[35vw]" src={bg} alt="" />
      </div>
    </div>
  );
};

export default Benefits;
