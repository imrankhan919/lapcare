import React from "react";
import { Link } from "react-router-dom";

const ComplaintCard = ({ complaint }) => {
  return (
    <div className="relative border p-4 border-gray-400 ">
      <div
        className={
          complaint.status === "open"
            ? "absolute top-3 right-3 bg-green-500 rounded-full text-center py-0.5 px-2 text-white font-bold"
            : complaint.status === "pending"
            ? "absolute top-3 right-3 bg-gray-500 rounded-full text-center py-0.5 px-2 text-white font-bold"
            : "absolute top-3 right-3 bg-red-500 rounded-full text-center py-0.5 px-2 text-white font-bold"
        }
      >
        {complaint.status}
      </div>
      <h1 className="font-bold my-2">Product : {complaint.laptop}</h1>
      <p className="text-sm font-semibold text-gray-500 mb-2">
        {new Date(complaint.createdAt).toLocaleDateString("en-IN")}
      </p>
      <Link
        className="bg-black font-semibold py-1 px-4 text-white"
        to={`/complaints/${complaint._id}`}
      >
        View
      </Link>
    </div>
  );
};

export default ComplaintCard;
