import React from "react";
import { gallery, quickLinks, services, socialMedia } from "./utils";

const Footer = () => {
  return (
    <div className="w-full h-fit bg-black py-14">
      <div className="max-w-screen-xl mx-auto flex items-start justify-between">
        <div className="w-[20vw]" >
          <h1 className="text-white text-4xl" >Schoolify</h1>
          <p className="text-white opacity-80 py-5">
            Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt
            tortor aliquam nulla facilisi cras fermentum odio eu.
          </p>
          <div className="flex items-center gap-2">
            {socialMedia?.map((Element , id) =>(
                <p className="text-[#704FE6] p-2 rounded-full bg-[#E9E2FF] cursor-pointer" key={id} >{<Element.icon/>}</p>
            ))}
          </div>
        </div>

        {/* services  */}
        <div>
            <h1 className="capitalize text-white font-bold text-2xl" >our services</h1>
            <ul>
                {services?.map((Element , id) =>(
                    <li className="text-white pl-3 text-sm opacity-80 leading-7" key={id} >{Element.title}</li>
                ))}
            </ul>
        </div>
            
        {/* quick links  */}
        <div>
            <h1 className="capitalize text-white font-bold text-2xl" >Quick Links</h1>
            <ul>
                {quickLinks?.map((Element , id) =>(
                    <li className="text-white pl-3 text-sm opacity-80 leading-7 capitalize" key={id} >{Element.title}</li>
                ))}
            </ul>
        </div>
        
        {/* gallery section  */}
        <div>
        <h1 className="capitalize text-white font-bold text-2xl" >Gallery</h1>
        <div className="grid grid-cols-3 gap-2" >
                {
                    gallery?.map((Element , id) =>(
                        <img className="w-12" key={id} src={Element.img} alt="" />
                    ))
                }
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
