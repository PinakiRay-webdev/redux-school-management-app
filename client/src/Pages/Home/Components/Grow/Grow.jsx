import React from "react";
import grow from "./Assets/grow.svg";
const Grow = () => {
  return (
    <div className="w-full h-fit py-12">
      <div className="max-w-screen-xl mx-auto flex items-end justify-between gap-28">
        {/* image section  */}
        <img className="w-[35vw]" src={grow} alt="" />
        {/* description section  */}
        <div>
            {/* header  */}
          <p className="text-[#704FE6] bg-[#E9E2FF] px-3 py-1 font-light w-fit text-xs">
            OUR ABOUT US
          </p>
          {/* header  */}
          <h1 className="text-4xl font-bold text-[#0E2A46] mt-7 capitalize">
            Learn and grow your skills <br /> From anywhere
          </h1>
          {/* body  */}
          <p className="mt-7" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris..
          </p>
          {/* footer description  */}
          <div className="flex items-center justify-between gap-10 mt-7">
            <div className="w-full" >
              <h1 className="font-bold mb-2" >Flexible classNamees</h1>
              <p>
                Suspendisse ultrice gravida dictum fusce placerat ultricies
                integer quis auctor elit sed vulputate mi sit.
              </p>
            </div>
            <div className="w-full">
              <h1 className="font-bold mb-2" >Flexible classNamees</h1>
              <p>
                Suspendisse ultrice gravida dictum fusce placerat ultricies
                integer quis auctor elit sed vulputate mi sit.
              </p>
            </div>
          </div>

          {/* button  */}
          <button className='bg-[#704FE6] px-6 rounded-full py-3 font-light text-white mt-12'>Load more</button>
        </div>
      </div>
    </div>
  );
};

export default Grow;
