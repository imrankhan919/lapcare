import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-xl font-bold text-center">Welcome Admin</h1>
      <div className="p-5 border flex flex-col my-5">
        <Link
          to={"/admin/users"}
          className="text-center bg-black text-white font-semibold py-2 px-8 w-full my-2 hover:cursor-pointer hover:bg-white hover:text-black border duration-150"
        >
          All Users
        </Link>
        <Link
          to={"/complaints"}
          className="text-center bg-black text-white font-semibold py-2 px-8 w-full my-2 hover:cursor-pointer hover:bg-white hover:text-black border duration-150"
        >
          All Complaints
        </Link>
        <Link
          to={"/admin/comments"}
          className="text-center bg-black text-white font-semibold py-2 px-8 w-full my-2 hover:cursor-pointer hover:bg-white hover:text-black border duration-150"
        >
          All Comments
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
