import React from "react";
import BackButton from "../components/BackButton";

const SingleComplaint = () => {
  return (
    <div className="min-h-screen p-10">
      <BackButton url={"/complaints"} />
      <div className="my-2 relative p-5 border border-gray-400 flex items-center justify-between flex-col md:flex-row">
        <div className="absolute top-3 left-3 bg-red-500 rounded-full text-center py-0.5 px-2 text-white font-bold">
          open
        </div>
        <div className="my-4 w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl font-bold my-2">Laptop</h1>
          <p className="text-sm font-semibold text-gray-600 my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            consequuntur molestiae ipsum ducimus perferendis sint ut cum alias
            voluptatum cumque voluptatem iste magnam dolorum et neque velit ab
            pariatur delectus.
          </p>
          <p className="text-sm font-semibold text-gray-600 my-2">
            Date : 25-Feb-25
          </p>
          <p className="text-sm font-semibold text-gray-600 my-2">
            Complaint Id : sd4f65s4f65sd4f65s
          </p>
        </div>
        <div>
          <img
            className="h-72"
            src="https://lntsufin.com/storage/mediafiles/catalog/live/15805-19/original/15805-19_image_0.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="my-5 border border-gray-400 p-5">
        <form>
          <input
            type="text"
            placeholder="Enter Comment"
            className="border border-gray-500 w-full p-2"
          />
          <button className="hover:cursor-pointer hover:bg-gray-800 duration-150 bg-black text-white font-semibold text-base py-2 px-2 w-full my-2">
            Add Comment
          </button>
        </form>

        <div className="my-2 border border-gray-400 p-4">
          <h2 className="text-lg font-semibold">Repair ASAP!!</h2>
          <p className="text-gray-400 text-sm ">25-Feb-25</p>
        </div>
        <div className="bg-gray-200 my-2 border border-gray-400 p-4">
          <h2 className="text-lg font-semibold">
            Kar Rahe Hai Itni Jaldi Kya H?
          </h2>
          <p className="text-gray-400 text-sm ">25-Feb-25</p>
        </div>
      </div>

      <button className="bg-red-400 my-2 py-2 px-4 w-full text-white font-bold hover:bg-red-600 duration-200 hover:cursor-pointer">
        Close My Complaint
      </button>
    </div>
  );
};

export default SingleComplaint;
