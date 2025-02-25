import React from "react";
import { Link } from "react-router-dom";

const BackButton = ({ url }) => {
  return (
    <Link
      to={url}
      className="font-semibold bg-black my-2 text-white py-1 px-4 hover:bg-gray-800 duration-150 hover:cursor-pointer"
    >
      Go Back
    </Link>
  );
};

export default BackButton;
