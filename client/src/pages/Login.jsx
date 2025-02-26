import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { loginUser } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }

    if (isError && message) {
      toast.error(message);
    }
  }, [isError, message, user]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-center font-bold text-xl">Login Here</h1>

      <div className="p-5 border my-5">
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            value={email}
            onChange={handleChange}
            type="email"
            placeholder="Enter Email"
            className="my-2 border border-gray-400 p-2 w-full disabled:bg-sky-200 text-sm"
          />

          <input
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
            className="my-2 border border-gray-400 p-2 w-full disabled:bg-sky-200 text-sm"
            placeholder="Enter Password"
          />

          <button className="bg-black w-full my-2 text-white py-2 px-4 font-bold hover:bg-green-700 hover:cursor-pointer duration-150 ">
            Login Here
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
