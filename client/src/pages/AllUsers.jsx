import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllUsers } from "../features/admin/adminSlice";
import BackButton from "../components/BackButton";

const AllUsers = () => {
  const { user } = useSelector((state) => state.auth);
  const { allUsers, isLoading, isError, message } = useSelector(
    (state) => state.admin
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isAdmin) {
      navigate("/");
    }

    dispatch(getAllUsers());

    if (isError && message) {
      toast.error(message);
    }
  }, [user, isError, message]);

  return (
    <div className="min-h-screen p-10">
      <BackButton url={"/"} />
      <h1 className="text-xl font-bold text-center my-10">All Users</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {allUsers.map((user) => {
          return (
            <div className="relative border p-4 border-gray-400 ">
              <h1 className="font-bold my-2">{user.name}</h1>
              <p className="font-bold my-2">{user.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllUsers;
