import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-center font-bold text-xl">Login Here</h1>

      <div className="p-5 border my-5">
        <form>
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

          <button className="bg-black w-full my-2 text-white py-2 px-4 font-bold hover:bg-green-700 hover:cursor-pointer duration-150 ">
            Login Here
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
