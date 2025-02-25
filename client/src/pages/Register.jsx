import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-center font-bold text-xl">Register Here</h1>

      <div className="p-5 border my-5">
        <form>
          <input
            name="name"
            type="text"
            placeholder="Enter Name"
            className="my-2 border border-gray-400 p-2 w-full disabled:bg-sky-200 text-sm"
          />
          <input
            name="email"
            type="email"
            placeholder="Enter Email"
            className="my-2 border border-gray-400 p-2 w-full disabled:bg-sky-200 text-sm"
          />

          <input
            name="password"
            type="password"
            className="my-2 border border-gray-400 p-2 w-full disabled:bg-sky-200 text-sm"
            placeholder="Enter Password"
          />
          <input
            name="password2"
            type="password"
            className="my-2 border border-gray-400 p-2 w-full disabled:bg-sky-200 text-sm"
            placeholder="Confirm Password"
          />
          <button className="bg-black w-full my-2 text-white py-2 px-4 font-bold hover:bg-green-700 hover:cursor-pointer duration-150 ">
            Register Here
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
