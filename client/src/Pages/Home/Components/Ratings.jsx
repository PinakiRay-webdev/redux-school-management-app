import React from "react";
import { FaStar } from "react-icons/fa";

const Ratings = ({stars}) => {
  return (
    <div className="flex items-center" >
      <div className="flex gap-1 items-center">
        {[...Array(stars)].map(() => (
          <p className="text-amber-400 text-xs">
            <FaStar />
          </p>
        ))}
      </div>
      <div className="flex gap-1 items-center">
        {[...Array(5-stars)].map(() => (
          <p className="text-gray-400 text-xs">
            <FaStar />
          </p>
        ))}
      </div>
    </div>
  );
};

export default Ratings;
