import React from "react";

const RaiseComplaint = () => {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-center font-bold text-xl">Raise New Complaint</h1>

      <div className="p-5 border my-5">
        <form>
          <input
            type="text"
            value={"Peter"}
            className="my-2 border border-gray-400 p-2 w-full disabled:bg-sky-200 text-sm"
            disabled
          />
          <input
            type="email"
            value={"peter@gmail.com"}
            className="my-2 border border-gray-400 p-2 w-full disabled:bg-sky-200 text-sm"
            disabled
          />
          <select className="p-2 border border-gray-400 w-full my-2">
            <option value="apple">Apple</option>
            <option value="lenevo">Lenevo</option>
            <option value="hp">HP</option>
            <option value="dell">Dell</option>
            <option value="acer">Acer</option>
            <option value="samsung">Samsung</option>
          </select>
          <textarea
            className="p-2 border border-gray-400 w-full"
            placeholder="describe your issue here"
          ></textarea>
          <input
            type="text"
            className="my-2 border border-gray-400 p-2 w-full disabled:bg-sky-200 text-sm"
            placeholder="Image Url"
          />
          <button className="bg-black w-full my-2 text-white py-2 px-4 font-bold hover:bg-green-700 hover:cursor-pointer duration-150 ">
            Raise Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default RaiseComplaint;
