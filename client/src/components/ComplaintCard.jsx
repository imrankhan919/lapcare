import React from "react";
import { Link } from "react-router-dom";
const ComplaintCard = () => {
  return (
    <div className="relative border p-4 border-gray-400 ">
      <div className="absolute top-3 right-3 bg-red-500 rounded-full text-center py-0.5 px-2 text-white font-bold">
        open
      </div>
      <h1 className="font-bold my-2">Product : Apple</h1>
      <p className="text-sm font-semibold text-gray-500 mb-2">24-Feb-25</p>
      <Link
        className="bg-black font-semibold py-1 px-4 text-white"
        to={"/complaints/123"}
      >
        View
      </Link>
    </div>
  );
};

export default ComplaintCard;
